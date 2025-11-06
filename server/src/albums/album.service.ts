import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Album, AlbumDocument } from './schema/albums.schema';
import { Model, ObjectId } from 'mongoose';
import { CreateAlbumDto } from './dto/create-album.dto';
import { FileService, FileType } from '../file/file.service';
import { Track, TrackDocument } from '../track/schema/track.schema';

@Injectable()
export class AlbumService {
  constructor(
    @InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    private fileService: FileService,
  ) {}

  async create(
    dto: CreateAlbumDto,
    picture: Express.Multer.File,
  ): Promise<Album> {
    try {
      console.log('dto in create album: ', dto);
      if (dto.tracks?.length) {
        const tracks = await this.trackModel
          .find({ _id: { $in: dto.tracks } })
          .exec();

        console.log('tracks in album service', tracks);
        if (tracks.length === 0) {
          throw new BadRequestException('No tracks found for the provided IDs');
        }

        if (tracks.length !== dto.tracks.length) {
          throw new BadRequestException('Some tracks do not exist');
        }
      }

      const picturePath = this.fileService.createFile(FileType.IMAGE, picture);

      const track = await this.albumModel.create({
        ...dto,
        picture: picturePath,
      });

      return track!;
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to create album',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAllAlbums(): Promise<Album[]> {
    try {
      const albums = await this.albumModel.find();
      return albums!;
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to fetch albums',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getOne(id: ObjectId): Promise<Album> {
    try {
      const album = await this.albumModel.findById(id).populate('tracks');

      if (!album) {
        throw new BadRequestException('Album not found');
      }

      return album;
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to fetch album',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(id: ObjectId): Promise<{ id: ObjectId; message: string }> {
    try {
      await this.albumModel.findByIdAndDelete(id);

      return {
        id,
        message: 'Album deleted successfully.',
      };
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to delete album',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
