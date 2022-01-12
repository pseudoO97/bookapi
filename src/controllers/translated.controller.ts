import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TranslatedService } from '../services/translated.service';
import { CreateTranslatedDto } from '../dto/create-translated.dto';
import { Translated } from '../entities/translated.entity';

@ApiBearerAuth()
@ApiTags('lang')
@Controller('lang')
export class TranslatedController {
    constructor(private readonly TranslatedService: TranslatedService) {}

    @Post()
    @ApiOperation({ summary: 'Create published' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createTranslatedDto: CreateTranslatedDto): Promise<Translated> {
      return this.TranslatedService.create(createTranslatedDto);
    }
  
    @Get(':id')
    @ApiResponse({
      status: 200,
      description: 'The found record',
      type: Translated,
    })
    findOne(@Param('id') id: string): Translated {
      // return this.TranslatedService.findOne(+id);
      return null;
    }
}