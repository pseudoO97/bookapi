// Auriane GS
import { IsInt, IsString } from 'class-validator';

export class CreatePublisherDto { 
  @IsInt()
  id_publisher: bigint;

  @IsInt()
  name: number;
}