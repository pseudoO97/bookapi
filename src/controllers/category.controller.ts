import {Body, Request, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CategoryService} from "../services/category.service";
import {CreateCategoryDto} from "../dto/create-category.dto";
import {CategoryEntity} from "../entities/category.entity";
import { JwtAuthGuard } from 'src/jwt/auth/jwd-auth.guard';
import { AuthService } from 'src/jwt/auth/auth.service';
import { LocalAuthGuard } from 'src/jwt/auth/local-auth.guard';

@ApiBearerAuth()
@ApiTags('category')
@Controller('category')
export class CategoryController {
    constructor(private readonly service: CategoryService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new category book'})
    @ApiBody({type:CategoryEntity, description:"Insert a new category."})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createDto: CreateCategoryDto): Promise<CategoryEntity> {
        return this.service.create(createDto);
    }

    @Get('guard')
    @UseGuards(JwtAuthGuard)
    @ApiOperation({summary: 'Get the categories book'})
    @ApiResponse({
        status: 200,
        description: 'Get all categories',
        type: CategoryEntity
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findAll(): Promise<CategoryEntity[]>{
        return this.service.findAll();
    }

    @Get(':name')
    @ApiOperation({summary:'Found a category book'})
    @ApiResponse({
        status: 200,
        description: 'Found the category with the name',
        type: CategoryEntity
    })
    @ApiResponse({
        status: 404,
        description: 'No category with this name',
        type: CategoryEntity
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findOne(@Param('name') name: string): Promise<CategoryEntity> {
        return this.service.findOne(name);
    }
}
