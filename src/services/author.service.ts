import {Injectable} from "@nestjs/common";
import { AuthorEntity } from "src/entities/author.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

//badis
@Injectable()
export class AuthorService {

    constructor(
        @InjectRepository(AuthorEntity)
        private repository: Repository<AuthorEntity>,
    ) {}

/*    async create(createAuthorDto: CreateAuthorDto): Promise<AuthorEntity> {
        const created = new this.model(createAuthorDto);
        return await created.save();
    }*/

    async findAll(): Promise<AuthorEntity[]> {
        return await this.repository.find();
    }

    async findOne(firstname: string): Promise<AuthorEntity> {
        return await this.repository.findOne({firstName: firstname});
    }

}