// Auriane GS
import { IsInt, IsString } from 'class-validator';

export class CreateLangDto { 
  @IsInt()
  id: bigint;

  @IsString()
  name: string;
}