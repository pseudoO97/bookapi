import { IsInt,IsString } from 'class-validator';
import {ApiParam, ApiProperty} from "@nestjs/swagger";

export class CreateCategoryDto {

  @IsString()
  readonly name: string;

}