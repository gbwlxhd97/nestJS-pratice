import { Module } from '@nestjs/common';
import { MoviesController } from './controller/movies/movies.controller';
import { MoviesService } from './service/movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
