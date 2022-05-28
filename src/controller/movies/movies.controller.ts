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
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';



@Controller('movies') // entry URL
@ApiTags('영화 API')
export class MoviesController {
  constructor(private readonly MoviesService: MoviesService) {}

  @Get()
  @ApiOperation({summary: "영화 전체조회 api", description: '영화를 조회한다'})
  getAll(): Movie[] {
    return this.MoviesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.MoviesService.getOne(movieId);
  }

  @Post()
  @ApiOperation({summary: '영화 api', description: '영화를 생성한다.'})
  @ApiBody({type: CreateMovieDto})
  @ApiCreatedResponse({description: '영화생성' , type: CreateMovieDto})
  create(@Body() movieData: CreateMovieDto) {
    movieData;
    return this.MoviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.MoviesService.deleteOne(movieId);
  }

  @Patch(':id')
  update(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.MoviesService.update(movieId, updateData);
  }
}
