import { Controller, Get,Request, Post, UseGuards } from '@nestjs/common';
import { Book } from './entities/book.entity';
import { AuthService } from './jwt/auth/auth.service';
import { JwtAuthGuard } from './jwt/auth/jwd-auth.guard';
import { LocalAuthGuard } from './jwt/auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // findAll(): Promise<Book[]>{
  //   return req.user;
  // }
}
