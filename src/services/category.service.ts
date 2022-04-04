import {Injectable} from "@nestjs/common";
import {CategoryEntity} from "../entities/category.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreateCategoryDto} from "../dto/create-category.dto";

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(CategoryEntity)
        private repository: Repository<CategoryEntity>
    ) {}

    async create(createCatDto: CreateCategoryDto): Promise<CategoryEntity> {
        return await this.repository.save(createCatDto);
    }

    async findAll(): Promise<CategoryEntity[]> {
        return await this.repository.find();
    }

    async findOne(name: string): Promise<CategoryEntity> {
        return await this.repository.findOne({name: name});
    }
}