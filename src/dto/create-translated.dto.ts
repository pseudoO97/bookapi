// Auriane GS
import { IsInt, IsString } from 'class-validator';

export class CreateTranslatedDto { 
  @IsInt()
  id: bigint;

  @IsInt()
  id_book: number;
}