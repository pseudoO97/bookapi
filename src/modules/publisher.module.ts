import { Module } from '@nestjs/common';
import {PublisherController} from "../controllers/publisher.controller";
import {PublisherService} from "../services/publisher.service";
import {PublisherEntity} from "../entities/publisher.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

//Dorian
@Module({
    imports: [TypeOrmModule.forFeature([PublisherEntity])],
    controllers: [PublisherController],
    providers: [PublisherService],
})
export class PublisherModule {}
