import { IsInt ,IsString,IsDate} from 'class-validator';

export class CreateUserDto {
  @IsInt()
  id: number;

  @IsString()
  password: string;

  @IsString()
   pseudo : string;

   @IsString()
   email: string;

}