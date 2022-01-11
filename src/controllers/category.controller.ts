import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CategoryService} from "../services/category.service";
import {CreateCategoryDto} from "../dto/create-category.dto";
import {Category} from "../entities/category";

@ApiBearerAuth()
@ApiTags('category')
@Controller('category')
export class CategoryController {
    constructor(private readonly Service: CategoryService) {}

    @Post()
    @ApiOperation({ summary: 'Create a category book' })
    async create(@Body() createDto: CreateCategoryDto): Promise<Category> {
        return this.Service.create(createDto);
    }

    @Get()
    findAll(): Promise<Category[]>{
        return this.Service.findAll();
    }

    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: Category,
    })
    findOne(@Param('id') id): Promise<Category> {
        return this.Service.findOne(+id);
    }
}
