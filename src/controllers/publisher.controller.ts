import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('publisher')
export class PublishergController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}