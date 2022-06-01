import { CreateBoardDto } from './dto/create-board.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './entity/board.entity';
@Injectable()
export class BoardsService {
  constructor(@InjectRepository(BoardRepository) private boardRepository:BoardRepository){}
  async getAllBoards(): Promise <Board[]> {
    return await this.boardRepository.find();
  }

  async getBoardById(id: number): Promise <Board> {
    const found = await this.boardRepository.findOne(id)
    if (!found) {
      throw new NotFoundException(`Board ID ${id} not found`);
    }
    return found;
  }

  createBoard(createBoardDto: CreateBoardDto):Promise <Board> {
    return this.boardRepository.createBoard(createBoardDto)
  }

  async deleteBoard(id: number): Promise <void> {
    const result = await this.boardRepository.delete(id);
    // console.log(result); // { raw: [], affected: 1} delete로 인해 영향받으면 1 아니면 0
    if(result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`)
    }
  }
  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);
    board.status = status;
    await this.boardRepository.save(board);
    return board;
  }
}
