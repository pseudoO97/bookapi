import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "../dto/create-user.dto";
import { User, UserDocument } from "../entities/user";

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private model: Model<UserDocument>) {}

    async create(createCatDto: CreateUserDto): Promise<User> {
        const createdCat = new this.model(createCatDto);
        return await createdCat.save();
    }

    async findAll(): Promise<User[]> {
        return await this.model.find().exec();
    }

   async findOne(pseudo: string): Promise<User> {
        return await this.model.findOne({pseudo:pseudo}).exec();
    }
}