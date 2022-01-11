import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {DictionaryHasCategory, DictionaryCategoryDocument} from "../entities/dictionary-category";
import {Model} from "mongoose";
import { CreateDictionaryCategoryDto } from "src/dto/dictionary-category.dto";

@Injectable()
export class DictionaryCategoryService {

    constructor(@InjectModel(DictionaryHasCategory.name) private model: Model<DictionaryCategoryDocument>) {}

    async create(createCatDto: CreateDictionaryCategoryDto): Promise<DictionaryHasCategory> {
        const createdCat = new this.model(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<DictionaryHasCategory[]> {
        return this.model.find().exec();
    }

}