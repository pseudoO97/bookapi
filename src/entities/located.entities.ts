import { IsInt } from 'class-validator';

export class CreatelocatedDto {
 

  @IsInt()
  id: number;

  @IsInt()
  id_location: number;
} 