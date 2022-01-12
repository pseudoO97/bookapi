import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from '../dto/create-book.dto';
import {Book, BookDocument} from '../entities/book.entity';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private model: Model<BookDocument>) {}

  async create(CreateBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.model(CreateBookDto);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
      return await this.model.find().exec();
  }

  async findOne(title: string): Promise<Book> {
    return await this.model.findOne({title: title}).exec();
  }
}
