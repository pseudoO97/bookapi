import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {LangEntity} from "../entities/lang.entity";
import {Repository} from "typeorm";

@Injectable()
export class LangService {
  constructor(
      @InjectRepository(LangEntity)
      private repository: Repository<LangEntity>
  ) {}

 /* async create(CreateLangDto: CreateLangDto): Promise<LangEntity> {
      const createdLang = new this.model(CreateLangDto);
      return await createdLang.save();
  }*/

  async findAll(): Promise<LangEntity[]> {
    return await this.repository.find();
  }

  async findOne(name: string): Promise<LangEntity> {
      return await this.repository.findOne({name:name});
  }
}
