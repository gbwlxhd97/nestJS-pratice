import { CreateBoardDto } from './dto/create-board.dto';
import { EntityRepository, Repository } from 'typeorm';
import { Board } from './entity/board.entity';
import { BoardStatus } from './board-status.enum';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;
    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });
    await this.save(board); // db에 저장
    return board;
  }
}