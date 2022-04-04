import {Injectable} from "@nestjs/common";
import {DictionaryEntity} from "../entities/dictionary.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class DictionaryService {

    constructor(
        @InjectRepository(DictionaryEntity)
        private repository: Repository<DictionaryEntity>
    ) {}

/*    async create(createCatDto: CreateDictionaryDto): Promise<DictionaryEntity> {
        const createdCat = new this.model(createCatDto);
        return createdCat.save();
    }*/

    async findAll(): Promise<DictionaryEntity[]> {
        return this.repository.find();
    }
    async findOne(name: string): Promise<DictionaryEntity> {
        return this.repository.findOne({name:name});
    }

}