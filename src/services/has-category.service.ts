import {Injectable} from "@nestjs/common";
import {User} from "../entities/user";
import {CreateUserDto} from "../dto/create-has-category.dto";
import mongo_connector from "../mongo_connector";

@Injectable()
export class HasCategoryService {

    create(user: CreateHasCategory): User {
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