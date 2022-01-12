import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PublishedService } from '../services/published.service';
import { CreatePublishedDto } from '../dto/create-published.dto';
import { Published } from '../entities/published.entity';

@ApiBearerAuth()
@ApiTags('lang')
@Controller('lang')
export class PublishedController {
    constructor(private readonly PublishedService: PublishedService) {}

    @Post()
    @ApiOperation({ summary: 'Create published' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createCatDto: CreatePublishedDto): Promise<Published> {
      return this.PublishedService.create(createCatDto);
    }
  
    @Get(':id')
    @ApiResponse({
      status: 200,
      description: 'The found record',
      type: Published,
    })
    findOne(@Param('id') id: string): Published {
      // return this.PublishedService.findOne(+id);
      return null;
    }
}