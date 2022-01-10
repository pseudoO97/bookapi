import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('lang')
export class LangController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}