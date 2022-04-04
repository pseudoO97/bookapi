import { Module } from '@nestjs/common';
import {LangEntity} from "../entities/lang.entity";
import {LangController} from "../controllers/lang.controller";
import {LangService} from "../services/lang.service";
import {TypeOrmModule} from "@nestjs/typeorm";

//Dorian
@Module({
    imports: [TypeOrmModule.forFeature([LangEntity])],
    controllers: [LangController],
    providers: [LangService],
})
export class LangModule {}
