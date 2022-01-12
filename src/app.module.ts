import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { CategoryModule } from './modules/category.module';
import { BookModule } from './modules/book.module';
import { UserModule } from './modules/user.module';
import { AuthService } from './jwt/auth/auth.service';
import { AuthModule } from './jwt/auth/auth.module';
import { UsersModule } from './jwt/users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://book_api:azerty15963@cluster0.kgirz.mongodb.net/Cluster0?retryWrites=true&w=majority"), 
    CategoryModule, 
    UsersModule, 
    BookModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
