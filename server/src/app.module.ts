import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TrackModule } from './track/track.module';
import { FileModule } from './file/file.module';
import { AlbumModule } from './albums/album.module';
import { config } from './config/config';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, 'static') }),
    MongooseModule.forRoot(config.environments.DATABASE_URL),
    TrackModule,
    FileModule,
    AlbumModule,
  ],
})
export class AppModule {}
