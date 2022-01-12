import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CategoryService} from "../services/category.service";
import {CreateCategoryDto} from "../dto/create-category.dto";
import {Category} from "../entities/category.entity";

//Dorian
@ApiBearerAuth()
@ApiTags('category')
@Controller('category')
export class CategoryController {
    constructor(private readonly Service: CategoryService) {}

    @Post()
    @ApiOperation({ summary: 'Create a category book'})
    @ApiBody({type:Category, description:"Insert a new category for book."})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createDto: CreateCategoryDto): Promise<Category> {
        return this.Service.create(createDto);
    }

    @Get()
    @ApiOperation({summary: 'Get the categories book'})
    @ApiResponse({
        status: 200,
        description: 'Get all categories',
        type: Category
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findAll(): Promise<Category[]>{
        return this.Service.findAll();
    }

    @Get(':name')
    @ApiOperation({summary:'Found a category book'})
    @ApiResponse({
        status: 200,
        description: 'Found the category with the name',
        type: Category
    })
    @ApiResponse({
        status: 404,
        description: 'No category with this name',
        type: Category
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async findOne(@Param('name') name: string): Promise<Category> {
        return this.Service.findOne(name);
    }
}
