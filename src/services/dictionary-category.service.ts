import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {DictionaryCategory, DictionaryCategoryDocument} from "../entities/DictionaryCategory";
import {Model} from "mongoose";
import { CreateDictionaryCategoryDto } from "src/dto/DictionaryCategory.dto";

@Injectable()
export class DictionaryCategoryService {

    constructor(@InjectModel(DictionaryCategory.name) private model: Model<DictionaryCategoryDocument>) {}

    async create(createCatDto: CreateDictionaryCategoryDto): Promise<DictionaryCategory> {
        const createdCat = new this.model(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<DictionaryCategory[]> {
        return this.model.find().exec();
    }

}