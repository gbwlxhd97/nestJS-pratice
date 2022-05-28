import { CreateMovieDto } from './create-movie-dto';
import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';


//부분 타입 partial types
export class UpdateMovieDto extends PartialType(CreateMovieDto) {

}