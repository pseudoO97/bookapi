// Auriane GS
import { IsInt, IsString } from 'class-validator';

export class CreatetranslatedDto { 
  @IsInt()
  id: bigint;

  @IsInt()
  id_book: number;
}