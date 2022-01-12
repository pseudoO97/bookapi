// Auriane GS
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsString } from 'class-validator';

export class CreateBookDto { 

  @IsString()
  readonly title: string;

  @ApiProperty()
  @IsString()
  readonly summary: string;

  @ApiProperty()
  @IsString()
  readonly link_preview: string;

  @ApiProperty()
  @IsDateString()
  readonly date_released: String;
}