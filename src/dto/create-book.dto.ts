// Auriane GS
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsString } from 'class-validator';

export class CreateBookDto { 
  @ApiProperty()
  @IsInt()
  id: bigint;

  @IsString()
  @ApiProperty({
    title: 'Maine Coon'
    })
  title: string;

  @ApiProperty()
  @IsString()
  summary: string;

  @ApiProperty()
  @IsString()
  link_preview: string;

  @ApiProperty()
  @IsDateString()
  date_released: String;
}