import { IsInt,IsString } from 'class-validator';

export class CreateauthorDto {
 

  @IsInt()
  id: number;

  @IsString()
  last_name: string;
  
  @IsString()
  first_name: string;
} 