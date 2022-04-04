import { Injectable } from "@nestjs/common";
import { UserEntity } from "../entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {FindOneOptions, Repository} from "typeorm";
import {CreateUserDto} from "../dto/create-user.dto";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private repository: Repository<UserEntity>
    ) {}

    async create(createUserDto: CreateUserDto): Promise<UserEntity> {

        const user = new UserEntity();
        user.pseudo = createUserDto.pseudo;
        user.password = createUserDto.password;
        user.email = createUserDto.email;

        return await this.repository.save(user);
    }

    async findAll(): Promise<UserEntity[]> {
        return this.repository.find();
    }

    async findOne(options?: FindOneOptions<UserEntity>): Promise<UserEntity> {
        return this.repository.findOne(options);
    }

    update(user: UserEntity): Promise<UserEntity> {
        return this.repository.save(user);
    }
}