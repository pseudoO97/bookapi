// Auriane GS
import { IsDateString, IsInt, IsString } from 'class-validator';

export class CreateBookDto { 

  @IsString()
  readonly title: string;

  @IsString()
  readonly summary: string;

  @IsString()
  readonly link_preview: string;

  @IsDateString()
  readonly date_released: String;
}