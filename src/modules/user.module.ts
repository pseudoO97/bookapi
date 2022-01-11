import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {UserController} from "../controllers/user.controller";
import {UserService} from "../services/User.service";
import {User, UserSchema} from "../entities/User";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
