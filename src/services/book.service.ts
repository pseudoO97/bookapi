import { Injectable, Param } from '@nestjs/common';
import { CreateBookDto } from '../dto/create-book.dto';
import {BookEntity} from '../entities/book.entity';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class BookService {
  constructor(
      @InjectRepository(BookEntity)
      private repository: Repository<BookEntity>
  ) {}

/*  async create(createBookDto: CreateBookDto): Promise<BookEntity> {
    const createdBook = new this.model(createBookDto);
    return await createdBook.save();
  }*/

  // findOne(@Param('id') id: string): BookEntity{
  //   return this.books[id];
  // }
  async findAll(): Promise<BookEntity[]> {
      return await this.repository.find();
  }

  async findOne(title: string): Promise<BookEntity> {
    return await this.repository.findOne({title: title});
  }
}
