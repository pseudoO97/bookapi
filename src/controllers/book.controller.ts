import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('book')
export class BookController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}