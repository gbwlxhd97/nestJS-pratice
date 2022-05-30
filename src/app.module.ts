import { Module } from '@nestjs/common';
import { MoviesModule } from './controller/movies/movies.module';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [MoviesModule, BoardsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
