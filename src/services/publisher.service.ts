
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {PublisherEntity} from "../entities/publisher.entity";
import {Repository} from "typeorm";

@Injectable()
export class PublisherService {
  constructor(
      @InjectRepository(PublisherEntity)
      private repository: Repository<PublisherEntity>
  ) {}
/*
  async create(createCatDto: CreatePublisherDto): Promise<PublisherEntity> {
      const createdPublisher = new this.model(CreatePublisherDto);
      return await createdPublisher.save();
  }*/

  async findAll(): Promise<PublisherEntity[]> {
      return await this.repository.find();
  }

  async findOne(name: string): Promise<PublisherEntity> {
      return await this.repository.findOne({name:name});
  }
}
