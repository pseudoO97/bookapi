// Auriane GS
import { IsInt, IsString } from 'class-validator';

export class CreateTranslatedDto { 
  @IsInt()
  id_translated: bigint;

  @IsInt()
  id_book: number;
}