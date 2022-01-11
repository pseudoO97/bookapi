import { IsInt,IsString } from 'class-validator';

export class CreateCategoryDto {

  @IsInt()
  id: number;

  @IsString()
  name: string;


}