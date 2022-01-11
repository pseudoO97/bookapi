import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from '../dto/create-book.dto';
import { Book } from '../entities/book.entity';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private model: Model<Book>) {}

    
  async create(CreateBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.model(CreateBookDto);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
      return this.model.find().exec();
  }
}
