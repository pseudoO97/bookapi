import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePublishedDto } from '../dto/create-published.dto';
import { Published } from '../entities/published.entity';

@Injectable()
export class PublishedService {
  constructor(@InjectModel(Published.name) private model: Model<Published>) {}

  async create(createCatDto: CreatePublishedDto): Promise<Published> {
      const createdPublished = new this.model(CreatePublishedDto);
      return createdPublished.save();
  }

  async findAll(): Promise<Published[]> {
      return this.model.find().exec();
  }
}
