// Auriane GS
import { IsInt, IsString } from 'class-validator';

export class CreatePublishedDto { 
  @IsInt()
  id: bigint;

  @IsInt()
  id_publisher: number;
}