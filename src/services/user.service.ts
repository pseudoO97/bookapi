import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../entities/User";
import {Model} from "mongoose";
import { CreateUserDto } from "src/dto/User.dto";

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private model: Model<UserDocument>) {}

    async create(createCatDto: CreateUserDto): Promise<User> {
        const createdCat = new this.model(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<User[]> {
        return this.model.find().exec();
    }

}