import {Body, Controller, Get, Module, Param, Post} from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { type } from "os";
import { CreateAuthorDto } from "src/dto/create-author.dto";
import { AuthorService } from "src/services/author.service";
import {AuthorEntity} from "../entities/author.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@ApiBearerAuth()
@ApiTags('author')
@Controller('author')
export class AuthorController {

    constructor(private readonly service: AuthorService) {}

    @Post()
    @ApiOperation({summary: 'Create an author'})
    @ApiBody({type:AuthorEntity,description: 'Insert the author name'})
    @ApiResponse({ status: 403, description: 'forbidden'})
    async create(@Body() CreateDto: CreateAuthorDto): Promise<AuthorEntity> {
        return null;//this.service.create(CreateDto);
    }

    @Get(":firstname")
    @ApiOperation({summary: 'Get the author first name'})
    @ApiResponse({
        status: 200,
        description: 'Get first name ',
        type: AuthorEntity
    })
    @ApiResponse({
        status: 404,
        description: 'No author with this first name',
        type: AuthorEntity
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findOne(@Param('firstname') name: string): Promise<AuthorEntity> {
        return this.service.findOne(name);
    
    }

    @Get()
    @ApiOperation({summary: 'Get the authors'})
    @ApiResponse({
        status: 200,
        description: 'Get all authors',
        type: AuthorEntity
    })
    @ApiResponse({ status: 403, description: 'forbidden'})
    async findAll(): Promise<AuthorEntity[]> {
        return this.service.findAll();
    }
}