import { Module } from '@nestjs/common';
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
import * as dotenv from "dotenv";
import {UserService} from "./services/user.service";
import { AuthorEntity } from './entities/author.entity';
import {DictionaryEntity} from "./entities/dictionary.entity";
import {PublisherEntity} from "./entities/publisher.entity";
import {UserEntity} from "./entities/user.entity";
import {BookEntity} from "./entities/book.entity";
import {LangEntity} from "./entities/lang.entity";
import {LocationEntity} from "./entities/location.entity";
import {CategoryEntity} from "./entities/category.entity";
import {HasReadEntity} from "./entities/has-read.entity";
import {Connection} from "typeorm";

dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_USER_PASSWORD,
      database: process.env.DB,
      entities: [AuthorEntity,UserEntity,LocationEntity,LangEntity,BookEntity,DictionaryEntity,CategoryEntity,HasReadEntity,PublisherEntity],
      synchronize: true,
    }),
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
  ],
  controllers: [AppController],
  providers: [UserService, AuthService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}