import { Injectable } from '@nestjs/common';
import { CreatePublisherDto } from '../dto/create-publisher.dto';
import { Publisher } from '../entities/publisher.entity';

@Injectable()
export class PublisherService {
  private readonly publishers: Publisher[] = [];

  create(cat: CreatePublisherDto): Publisher {
    return null;
  }

  findOne(id: number): Publisher {
    return this.publishers[id];
  }
}
