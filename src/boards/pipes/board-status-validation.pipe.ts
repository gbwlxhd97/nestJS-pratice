// custom pipe

import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../entity/board.entity';

export class BoardStatusValidtaionPipe implements PipeTransform {

  readonly StatusOptions = [
    BoardStatus.PRIVATE,
    BoardStatus.PUBLIC,
  ]

  transform(value:any , metaData: ArgumentMetadata) {
    value = value.toUpperCase();
    if(!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is not Status`)
    }
    return value;
  }

  private isStatusValid(status:any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}