// Auriane GS
import { IsDateString, IsInt, IsString } from 'class-validator';

export class CreateBookDto { 
  @IsInt()
  id: bigint;

  @IsString()
  title: string;

  @IsString()
  summary: string;

  @IsString()
  link_preview: string;

  @IsDateString()
  date_released: String;
}