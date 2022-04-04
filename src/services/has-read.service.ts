import {Injectable} from "@nestjs/common";
import {HasReadEntity} from "../entities/has-read.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class HasReadService {

    constructor(
        @InjectRepository(HasReadEntity)
        private repository: Repository<HasReadEntity>
    ) {}

/*    async create(createCatDto: CreateHasReadDto): Promise<HasReadEntity> {
        const createdHasRead = new this.model(createCatDto);
        return await createdHasRead.save();
    }*/

    async findAll(): Promise<HasReadEntity[]> {
        return await this.repository.find();
    }

}