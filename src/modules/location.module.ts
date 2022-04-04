import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {LocationEntity} from "../entities/location.entity";
import {LocationService} from "../services/location.service";
import {LocationController} from "../controllers/location.controller";

@Module({
    imports: [TypeOrmModule.forFeature([LocationEntity])],
    providers: [LocationService],
    controllers: [LocationController]
})
export class LocationModule {}
