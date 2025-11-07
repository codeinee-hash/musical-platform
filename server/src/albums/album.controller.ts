import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  UploadedFile,
  BadRequestException,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { AlbumService } from './album.service';
import mongoose from 'mongoose';
import { CreateAlbumDto } from './dto/create-album.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('albums')
export class AlbumController {
  constructor(private albumService: AlbumService) {}

  @Get()
  getAll() {
    return this.albumService.getAllAlbums();
  }

  @Get(':id')
  getOne(@Param('id') id: mongoose.Schema.Types.ObjectId) {
    return this.albumService.getOne(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('picture'))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto: CreateAlbumDto,
  ) {
    if (!file) {
      throw new BadRequestException('Picture file are required');
    }

    return this.albumService.create(dto, file);
  }

  @Delete(':id')
  deleteAlbum(@Param('id') id: mongoose.Schema.Types.ObjectId) {
    return this.albumService.delete(id);
  }
}
