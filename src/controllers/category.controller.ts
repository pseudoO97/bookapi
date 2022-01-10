import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CategoryService} from "../services/category.service";
import {CreateCategoryDto} from "../dto/category.dto";
import {Category} from "../entities/category";
import {Book} from "../entities/book.entity";

@ApiBearerAuth()
@ApiTags('book')
@Controller('book')
export class CategoryController {
    constructor(private readonly Service: CategoryService) {}

    @Post()
    @ApiOperation({ summary: 'Create a category book' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createDto: CreateCategoryDto): Promise<Category> {
        return this.Service.create(createDto);
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
