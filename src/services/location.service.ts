import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {LocationEntity} from "../entities/location.entity";
import {CreateLocationDto} from "../dto/create-location.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

//Dorian
@Injectable()
export class LocationService {
  constructor(
      @InjectRepository(LocationEntity)
      private repository: Repository<LocationEntity>
  ) {}

/*  async create(createLocationDto: CreateLocationDto): Promise<LocationEntity> {
      const createdLang = new this.model(createLocationDto);
      return await createdLang.save();
  }*/

  async findAll(): Promise<LocationEntity[]> {
      return await this.repository.find();
  }

  async findOne(filter: { name:string }|{country:string}): Promise<LocationEntity> {
      return await this.repository.findOne(filter);
  }
}
