import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('translated')
export class TranslatedController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}