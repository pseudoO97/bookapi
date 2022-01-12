import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "../dto/create-user.dto";
import { User, UserDocument } from "../entities/user";

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private model: Model<UserDocument>) {}


    private readonly users = [
        {
          email: 'test@john.com',
          pseudo: 'john',
          password: 'changeme',
        },
        {
          email: 'maria@hehe.fr',
          pseudo: 'maria',
          password: 'guess',
        },
      ];


    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdCat = new this.model(createUserDto);
        return createdCat.save();
    }

    async findAll(): Promise<User[]> {
        return await this.model.find().exec();
    }

   async findOne(pseudo: string): Promise<User> {
        return await this.model.findOne({pseudo:pseudo}).exec();
    }
}