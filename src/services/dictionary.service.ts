import {Injectable} from "@nestjs/common";
import {User} from "../entities/user";
import {CreateUserDto} from "../dto/create-user.dto";
import mongo_connector from "../mongo_connector";

@Injectable()
export class UserService {

    create(user: CreateUserDto): User {
        const mg = mongo_connector();
        return null;
    }

    findOne(id: number): User {
        return null;
    }

    findAll(): User[] {
        return [];
    }

}