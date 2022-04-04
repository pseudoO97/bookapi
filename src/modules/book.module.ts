import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {BookEntity} from "../entities/book.entity";
import {BookService} from "../services/book.service";
import {BookController} from "../controllers/book.controller";

@Module({
    imports: [TypeOrmModule.forFeature([BookEntity])],
    providers: [BookService],
    controllers: [BookController]
})
export class BookModule {}