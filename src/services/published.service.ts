import { Injectable } from '@nestjs/common';
import { CreatePublishedDto } from '../dto/create-published.dto';
import { Published } from '../entities/published.entity';

@Injectable()
export class PublishedService {
  private readonly publisheds: Published[] = [];

  create(published: CreatePublishedDto): Published {
    return null;
  }

  findOne(id: number): Published {
    return this.publisheds[id];
  }
}
