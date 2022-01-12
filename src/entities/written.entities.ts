import { IsInt } from 'class-validator';

export class CreatewrittenDto {
 

  @IsInt()
  id: number;

  @IsInt()
  id_author: number;
} 