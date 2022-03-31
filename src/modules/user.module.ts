import { Module } from '@nestjs/common';
import {UserController} from "../controllers/user.controller";
import {UserService} from "../services/user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "../entities/user.entity";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "../jwt/auth/constants";
import {JwtStrategy} from "../jwt/auth/jwt.strategy";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '100s' },
        }),
    ],
    controllers: [UserController],
    providers: [UserService, JwtStrategy],
    exports: [TypeOrmModule, JwtModule],
})
export class UserModule {}
