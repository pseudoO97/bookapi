import { IsInt ,IsString } from 'class-validator';

export class CreateUserDto {
  

  @IsString()
  password: string;

  @IsString()
  pseudo : string;

  @IsString()
  email: string;
}