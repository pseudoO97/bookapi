import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {HasReadService} from "../services/has-read.service";
import {HasReadEntity} from "../entities/has-read.entity";
import {CreateHasReadDto} from "../dto/create-has-read.dto";

//Dorian
@ApiBearerAuth()
@ApiTags('has-read')
@Controller('has-read')
export class HasReadController {
    constructor(private readonly Service: HasReadService) {}

    @Post()
    @ApiOperation({ summary: 'Create a category book'})
    @ApiBody({type:HasReadEntity, description:"Insert a new category for book."})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createDto: CreateHasReadDto): Promise<HasReadEntity> {
        return null;//this.Service.create(createDto);
    }

    @Get()
    @ApiOperation({summary: 'Get the categories book'})
    @ApiResponse({
        status: 200,
        description: 'Get all categories',
        type: HasReadEntity
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findAll(): Promise<HasReadEntity[]>{
        return this.Service.findAll();
    }
}
