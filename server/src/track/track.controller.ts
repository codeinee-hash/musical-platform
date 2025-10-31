import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post, Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/track.dto';
import * as mongoose from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('/tracks')
export class TrackController {
  constructor(private trackService: TrackService) {}

  @Post('')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'picture', maxCount: 1 },
    { name: 'audio', maxCount: 1 },
  ]))
  createTrack(
    @UploadedFiles() files: { picture?: Express.Multer.File[], audio?: Express.Multer.File[] },
    @Body() dto: CreateTrackDto
  ) {

    const { picture, audio } = files;

    if (!picture || !audio) {
      throw new BadRequestException('Picture and audio files are required');
    }

    return this.trackService.create(dto, picture[0], audio[0]);
  }

  @Get()
  getAllTracks(@Query('count') count: number, @Query('offset') offset: number) {
    return this.trackService.getAll(count, offset);
  }

  @Get('/search')
  search(@Query('query') query: string) {
    return this.trackService.search(query);
  }

  @Get(':id')
  getTrack(@Param('id') id: mongoose.Schema.Types.ObjectId) {
    return this.trackService.getOne(id);
  }

  @Delete(':id')
  deleteTrack(@Param('id') id: mongoose.Schema.Types.ObjectId) {
    return this.trackService.delete(id);
  }

  @Post('/comment')
  createComment(@Body() dto: CreateCommentDto) {
    return this.trackService.addComment(dto);
  }

  @Post('/listen/:id')
  listen(@Param('id') id: mongoose.Schema.Types.ObjectId) {
    return this.trackService.listen(id);
  }
}
