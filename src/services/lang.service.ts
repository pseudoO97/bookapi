import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLangDto } from '../dto/create-lang.dto';
import { Lang } from '../entities/lang.entity';

@Injectable()
export class LangService {
  constructor(@InjectModel(Lang.name) private model: Model<Lang>) {}

  async create(CreateLangDto: CreateLangDto): Promise<Lang> {
      const createdLang = new this.model(CreateLangDto);
      return createdLang.save();
  }

  async findAll(): Promise<Lang[]> {
    return this.model.find().exec();
  }
}
