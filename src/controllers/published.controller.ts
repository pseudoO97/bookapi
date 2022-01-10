import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('published')
export class PublishedgController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}