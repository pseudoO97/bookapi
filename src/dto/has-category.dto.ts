import { IsInt } from 'class-validator';

export class CreateHasCategoryDto {
  @IsInt()
  id: number;

  @IsInt()
  id_category: number;
}