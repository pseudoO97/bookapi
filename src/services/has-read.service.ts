import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {HasRead, HasReadDocument} from "../entities/HasRead";
import {Model} from "mongoose";
import { CreateHasReadDto } from "src/dto/HasRead.dto";

@Injectable()
export class HasReadService {

    constructor(@InjectModel(HasRead.name) private model: Model<HasReadDocument>) {}

    async create(createCatDto: CreateHasReadDto): Promise<HasRead> {
        const createdCat = new this.model(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<HasRead[]> {
        return this.model.find().exec();
    }

}