import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {BookHasCategory, HasCategoryDocument} from "../entities/has-category";
import {Model} from "mongoose";
import { CreateHasCategoryDto } from "src/dto/has-category.dto";

@Injectable()
export class HasCategoryService {

    constructor(@InjectModel(BookHasCategory.name) private model: Model<HasCategoryDocument>) {}

    async create(createCatDto: CreateHasCategoryDto): Promise<BookHasCategory> {
        const createdCat = new this.model(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<BookHasCategory[]> {
        return this.model.find().exec();
    }

}