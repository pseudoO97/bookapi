import { Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from '../dto/create-book.dto';
import { Book } from '../entities/book.entity';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private model: Model<Book>) {}
  private readonly books: Book[] = [];
    
  async create(CreateBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.model(CreateBookDto);
    return createdBook.save();
  }

  findOne(@Param('id') id: string): Book{
    return this.books[id];
  }
  async findAll(): Promise<Book[]> {
      return this.model.find().exec();
  }
}
