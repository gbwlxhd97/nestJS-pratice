import { CreateMovieDto } from './../../dto/create-movie-dto';
import { MoviesService } from './../../service/movies/movies.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from 'src/entity/movie.entity';
import { UpdateMovieDto } from 'src/dto/update-movie-dto';

@Controller('movies') // entry URL
export class MoviesController {

  constructor(private readonly MoviesService:MoviesService) {}

  @Get()
  getAll():Movie[] {
    return this.MoviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') movieId: number):Movie {
    return this.MoviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData:CreateMovieDto) {
    movieData
    return this.MoviesService.create(movieData)
  }

  @Delete(':/id')
  remove(@Param('id') movieId: number) {
    return this.MoviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  update(@Param('id') movieId: number, @Body() updateData:UpdateMovieDto) {
    return this.MoviesService.update(movieId, updateData);
  }
}
