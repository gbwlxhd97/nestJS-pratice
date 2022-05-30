import { CreateBoardDto } from './dto/create-board.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './entity/board.entity';
import { v1 as uuid } from 'uuid';
@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  getBoardById(id: string): Board {
    const board = this.boards.find((board) => board.id === id);
    if(!board) {
      throw new NotFoundException(`Board ID ${id} not found`);
    }
    return board;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }
  deleteBoard(id: string): void {
    const found = this.getBoardById(id); // 없으면 바로 에러를 리턴
    this.boards = this.boards.filter((board) => board.id !== found.id);
  }
  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
