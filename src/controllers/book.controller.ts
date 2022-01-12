import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
    ApiBearerAuth, ApiBody,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { BookService } from '../services/book.service';
import { CreateBookDto } from '../dto/create-book.dto';
import { Book } from '../entities/book.entity';

@ApiBearerAuth()
@ApiTags('book')
@Controller('book')
export class BookController {
    constructor(private readonly BookService: BookService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new book' })
    @ApiBody({type: Book, description: 'Insert a new book to the collection'})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
      return this.BookService.create(createBookDto);
    }

    @Get()
    @ApiOperation({summary: 'Get the collection book'})
    @ApiResponse({
        status: 200,
        description: 'Get all books',
        type: Book
    })
    async findAll(): Promise<Book[]>{
        return this.BookService.findAll();
    }


    @Get(':title')
    @ApiOperation({summary:'Found a book'})
    @ApiResponse({
        status: 200,
        description: 'Found the book with the title',
        type: Book
    })
    async findOne(@Param('title') title: string): Promise<Book> {
      return this.BookService.findOne(title);
    }
}