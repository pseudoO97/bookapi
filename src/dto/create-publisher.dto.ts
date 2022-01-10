// Auriane GS
import { IsInt, IsString } from 'class-validator';

export class CreatePublisherDto { 
  @IsInt()
  id: bigint;

  @IsInt()
  name: number;
}