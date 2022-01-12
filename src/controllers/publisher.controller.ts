import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PublisherService } from '../services/publisher.service';
import { CreatePublisherDto } from '../dto/create-publisher.dto';
import { Publisher } from '../entities/publisher.entity';

@ApiBearerAuth()
@ApiTags('lang')
@Controller('lang')
export class PublisherController {
    constructor(private readonly PublisherService: PublisherService) {}

    @Post()
    @ApiOperation({ summary: 'Create published' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createPublisherDto: CreatePublisherDto): Promise<Publisher> {
      return this.PublisherService.create(createPublisherDto);
    }
  
    @Get(':id')
    @ApiResponse({
      status: 200,
      description: 'The found record',
      type: Publisher,
    })
    findOne(@Param('id') id: string): Publisher {
      // return this.PublisherService.findOne(+id);
      return null;
    }
}