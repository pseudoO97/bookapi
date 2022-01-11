import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {HasRead, HasReadDocument} from "../entities/has-read";
import {Model} from "mongoose";
import { CreateHasReadDto } from "src/dto/create-has-read.dto";

@Injectable()
export class HasReadService {

    constructor(@InjectModel(HasRead.name) private model: Model<HasReadDocument>) {}

    async create(createCatDto: CreateHasReadDto): Promise<HasRead> {
        const createdHasRead = new this.model(createCatDto);
        return createdHasRead.save();
    }

    async findAll(): Promise<HasRead[]> {
        return this.model.find().exec();
    }

}