import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {HasCategory, HasCategoryDocument} from "../entities/HasCategory";
import {Model} from "mongoose";
import { CreateHasCategoryDto } from "src/dto/HasCategory.dto";

@Injectable()
export class HasCategoryService {

    constructor(@InjectModel(HasCategory.name) private model: Model<HasCategoryDocument>) {}

    async create(createCatDto: CreateHasCategoryDto): Promise<HasCategory> {
        const createdCat = new this.model(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<HasCategory[]> {
        return this.model.find().exec();
    }

}