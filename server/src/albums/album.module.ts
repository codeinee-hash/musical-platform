import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumService } from './album.service';
import { FileService } from '../file/file.service';
import { AlbumController } from './album.controller';
import { Album, AlbumSchema } from './schema/albums.schema';
import { Track, TrackSchema } from '../track/schema/track.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Album.name, schema: AlbumSchema }]),
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
  ],
  controllers: [AlbumController],
  providers: [AlbumService, FileService],
})
export class AlbumModule {}
