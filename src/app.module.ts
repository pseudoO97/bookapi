import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { CategoryModule } from './modules/category.module';
import { BookModule } from './modules/book.module';
import { UserModule } from './modules/user.module';
import { AuthService } from './jwt/auth/auth.service';
import { AuthModule } from './jwt/auth/auth.module';
import { LangModule} from "./modules/lang.module";
import { PublisherModule } from "./modules/publisher.module";
import { AppController } from './app.controller';
import { AuthorModule } from './modules/author.module';
import {HasReadModule} from "./modules/has-read.module";
import {DictionaryModule} from "./modules/dictionary.module"
import {LocationModule} from "./modules/location.module";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'books',
      entities: [],
      synchronize: true,
    }),
    // MongooseModule.forRoot("mongodb+srv://book_api:azerty15963@cluster0.kgirz.mongodb.net/Cluster0?retryWrites=true&w=majority"),
    CategoryModule,
    AuthorModule,
    UserModule,
    BookModule,
    LangModule,
    PublisherModule,
    AuthModule,
    HasReadModule,
    DictionaryModule,
      LocationModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AuthService],
})
export class AppModule {}
