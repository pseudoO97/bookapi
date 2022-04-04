import { Module } from '@nestjs/common';
import { DictionaryEntity } from '../entities/dictionary.entity';
import { DictionaryController } from '../controllers/dictionary.controller';
import { DictionaryService } from '../services/dictionary.service';
import {TypeOrmModule} from "@nestjs/typeorm";

//Auriane
@Module({
    imports: [TypeOrmModule.forFeature([DictionaryEntity])],
    controllers: [DictionaryController],
    providers: [DictionaryService],
})
export class DictionaryModule {}