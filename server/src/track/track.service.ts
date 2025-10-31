import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Track, TrackDocument } from './schema/track.schema';
import { Comment, CommentDocument } from './schema/comment.schema';
import { CreateTrackDto } from './dto/track.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FileService, FileType } from '../file/file.service';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private fileService: FileService) {}

  async create(dto: CreateTrackDto, picture: Express.Multer.File, audio: Express.Multer.File): Promise<Track> {
    try {
      const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
      const audioPath = this.fileService.createFile(FileType.AUDIO, audio);

      const track = await this.trackModel.create({ ...dto, listens: 0, audio: audioPath, picture: picturePath });

      return track!;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAll(count: number = 10, offset: number = 0): Promise<Track[]> {
    try {
      const tracks = await this.trackModel.find().skip(offset).limit(count);
      return tracks!;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getOne(id: ObjectId): Promise<Track> {
    try {
      const track = await this.trackModel.findById(id).populate('comments');

      if (!track) {
        throw new NotFoundException('Track not found');
      }

      return track;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: ObjectId): Promise<{ id: ObjectId, message: string }> {
    try {
      const track = await this.trackModel.findByIdAndDelete(id);

      if (!track) {
        throw new NotFoundException('Could not find track with id ' + id);
      }

      return { id: track?.id, message: 'Track is deleted.' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    try {
      const track = await this.trackModel.findById(dto.trackId);
      const comment = await this.commentModel.create({ ...dto });

      if (!track) {
        throw new NotFoundException('Track with id ' + dto.trackId + ' not found');
      }

      track?.comments.push(comment._id);
      await track?.save();
      return comment;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async listen(id: ObjectId): Promise<Track> {
    try {
      const track = await this.trackModel.findById(id);

      if (!track) {
        throw new NotFoundException('Track with id ' + id + ' not found');
      }

      track.listens += 1;
      track.save();

      return track;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async search(query: string): Promise<Track[]> {
    try {
      const tracks = await this.trackModel.find({
        name: { $regex: new RegExp(query, 'i') },
      });

      return tracks!;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
