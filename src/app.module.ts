import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import {CategoryModule} from "./modules/category.module";
import {UserModule} from "./modules/user.module";

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://book_api:azerty15963@cluster0.kgirz.mongodb.net/Cluster0?retryWrites=true&w=majority"),
  CategoryModule, UserModule],
})
export class AppModule {}
