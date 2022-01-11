import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class Translated {
  //Auriane 
  
  @Prop()
  id_translated: bigint;

  @Prop()
  id_book: number;
}
export const TranslatedSchema = SchemaFactory.createForClass(Translated);