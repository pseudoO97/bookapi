import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
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
    @ApiOperation({ summary: 'Create book' })
    @ApiResponse({ 
      status: 403, 
      description: 'Forbidden.' 
    })
    async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
      return this.BookService.create(createBookDto);
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Get a book' })
    @ApiResponse({
      status: 200,
      description: 'The found record',
      type: Book,
    })
    findOne(@Param('id') id: string): Book {
      return this.BookService.findOne(id);
    }
}