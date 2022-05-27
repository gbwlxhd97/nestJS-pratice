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

@Controller('movies') // entry URL
export class MoviesController {
  @Get()
  getAll() {
    return 'return all movies';
  }

  @Get('search')
  search(@Query("year") searchYear:String) {
    return `we are search year: ${searchYear}`
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `this one movie the id :${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    const { title, description } = movieData;
    return `this will create a movie title : ${title} des: ${description}`;
  }

  @Delete(':/id')
  remove(@Param('id') movieId: string) {
    return `this will delete a movie the id : ${movieId}`;
  }

  @Patch('/:id')
  update(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
