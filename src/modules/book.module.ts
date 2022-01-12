import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookController } from 'src/controllers/book.controller';
import { Book, BookSchema } from 'src/entities/book.entity';
import { BookService } from 'src/services/book.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])],
    controllers: [BookController],
    providers: [BookService],
})
export class BookModule {
}