import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {


  @IsString()
  readonly title: string;
  
  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({each: true}) //모든 요소를 하나하나 다 검사한다.
  readonly genres: string[];
}