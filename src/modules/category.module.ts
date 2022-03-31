import { Module } from '@nestjs/common';
import {CategoryController} from "../controllers/category.controller";
import {CategoryService} from "../services/category.service";
import {CategoryEntity} from "../entities/category.entity";
import { AuthService } from 'src/jwt/auth/auth.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserService} from "../services/user.service";
import {AuthModule} from "../jwt/auth/auth.module";
import {UserModule} from "./user.module";
import {JwtModule} from "@nestjs/jwt";

//Dorian
@Module({
    imports: [TypeOrmModule.forFeature([CategoryEntity]), AuthModule, UserModule],
    controllers: [CategoryController],
    providers: [CategoryService],
})
export class CategoryModule {}
