import { Module } from '@nestjs/common';
import {HasReadEntity} from "../entities/has-read.entity";
import {HasReadController} from "../controllers/has-read.controller";
import {HasReadService} from "../services/has-read.service";
import {TypeOrmModule} from "@nestjs/typeorm";

//Dorian
@Module({
    imports: [TypeOrmModule.forFeature([HasReadEntity])],
    controllers: [HasReadController],
    providers: [HasReadService],
})
export class HasReadModule {}
