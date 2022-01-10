import { Injectable } from '@nestjs/common';
import { CreateBookDto } from '../dto/create-book.dto';
import { Book } from '../entities/book.entity';

@Injectable()
export class BookService {
  private readonly books: Book[] = [];

  create(book: CreateBookDto): Book {
    return null;
  }

  findOne(id: number): Book {
    return this.books[id];
  }
}
