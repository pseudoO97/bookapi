import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LangService } from '../services/lang.service';
import { CreateLangDto } from '../dto/create-lang.dto';
import { Lang } from '../entities/lang.entity';

@ApiBearerAuth()
@ApiTags('lang')
@Controller('lang')
export class LangController {
    constructor(private readonly Service: LangService) {}

    @Post()
    @ApiOperation({ summary: 'Create lang' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createCatDto: CreateLangDto): Promise<Lang> {
      return this.Service.create(createCatDto);
    }
  
    @Get(':id')
    @ApiResponse({
      status: 200,
      description: 'The found record',
      type: Lang,
    })
    findOne(@Param('id') id: string): Lang {
      return //this.Service.findOne(+id);
        null;
    }
}