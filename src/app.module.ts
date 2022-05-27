import { Module } from '@nestjs/common';
import { MoviesController } from './controller/movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
