import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Category, CategoryDocument} from "../entities/category";
import {Model} from "mongoose";
import {CreateCategoryDto} from "../dto/category.dto";

@Injectable()
export class CategoryService {

    constructor(@InjectModel(Category.name) private model: Model<CategoryDocument>) {}

    async create(createCatDto: CreateCategoryDto): Promise<Category> {
        const createdCat = new this.model(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<Category[]> {
        return this.model.find().exec();
    }

    async findOne(id: number): Promise<Category> {
        return this.model.findOne({_id: id}).exec()
    }

}