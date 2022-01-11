// Auriane GS
import { IsInt, IsString } from 'class-validator';

export class CreatePublishedDto { 
  @IsInt()
  id_published: bigint;

  @IsInt()
  id_publisher: number;
}