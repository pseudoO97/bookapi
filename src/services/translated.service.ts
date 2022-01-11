import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTranslatedDto } from '../dto/create-translated.dto';
import { Translated } from '../entities/translated.entity';

@Injectable()
export class TranslatedService {
  constructor(@InjectModel(Translated.name) private model: Model<Translated>) {}

  async create(createCatDto: CreateTranslatedDto): Promise<Translated> {
      const createdTranslated = new this.model(CreateTranslatedDto);
      return createdTranslated.save();
  }

  async findAll(): Promise<Translated[]> {
      return this.model.find().exec();
  }
}
