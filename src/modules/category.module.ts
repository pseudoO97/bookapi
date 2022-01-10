import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {CategoryController} from "../controllers/category.controller";
import {CategoryService} from "../services/category.service";
import {Category, CategorySchema} from "../entities/category";

@Module({
    imports: [MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }])],
    controllers: [CategoryController],
    providers: [CategoryService],
})
export class CategoryModule {}
