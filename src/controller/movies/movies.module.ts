import { MoviesService } from './../../service/movies/movies.service';
import { MoviesController } from './movies.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
