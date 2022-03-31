import { Module } from '@nestjs/common';
import { AuthorController } from 'src/controllers/author.controller';
import { AuthorEntity } from 'src/entities/author.entity';
import { AuthorService } from 'src/services/author.service';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([AuthorEntity])],
    providers: [AuthorService],
    controllers: [AuthorController]
})
export class AuthorModule {}