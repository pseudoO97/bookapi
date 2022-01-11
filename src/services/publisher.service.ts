import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePublisherDto } from '../dto/create-publisher.dto';
import { Publisher } from '../entities/publisher.entity';

@Injectable()
export class PublisherService {
  constructor(@InjectModel(Publisher.name) private model: Model<Publisher>) {}

  async create(createCatDto: CreatePublisherDto): Promise<Publisher> {
      const createdPublisher = new this.model(CreatePublisherDto);
      return createdPublisher.save();
  }

  async findAll(): Promise<Publisher[]> {
      return this.model.find().exec();
  }
}
