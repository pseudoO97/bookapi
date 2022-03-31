import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
    ApiBearerAuth, ApiBody,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { LangService } from '../services/lang.service';
import { CreateLangDto } from '../dto/create-lang.dto';
import { LangEntity } from '../entities/lang.entity';
import {CategoryEntity} from "../entities/category.entity";

@ApiBearerAuth()
@ApiTags('lang')
@Controller('lang')
export class LangController {
    constructor(private readonly Service: LangService) {}

    @Post()
    @ApiOperation({ summary: 'Create a lang'})
    @ApiBody({type:LangEntity, description:"Insert a new lang."})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createCatDto: CreateLangDto): Promise<LangEntity> {
      return null;//this.Service.create(createCatDto);
    }

    @Get()
    @ApiOperation({summary: 'Get the languages'})
    @ApiResponse({
        status: 200,
        description: 'Get all lang',
        type: LangEntity
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findAll(): Promise<LangEntity[]>{
        return this.Service.findAll();
    }

    @Get(':name')
    @ApiOperation({summary:'Found a lang'})
    @ApiResponse({
        status: 200,
        description: 'Found the lang',
        type: LangEntity
    })
    @ApiResponse({
        status: 404,
        description: 'No lang with this name',
        type: LangEntity
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    findOne(@Param('name') name: string): Promise<LangEntity> {
      return this.Service.findOne(name);
    }
}