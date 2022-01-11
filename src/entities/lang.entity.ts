import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class Lang {
 // Auriane 
  id_lang: bigint;
  name: string;
}
export const LangSchema = SchemaFactory.createForClass(Lang);