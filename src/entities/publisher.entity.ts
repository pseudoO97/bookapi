import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class Publisher {
  //Auriane 
  
  @Prop()
  id_publisher: bigint;

  @Prop()
  name: string;
}

export const PublisherSchema = SchemaFactory.createForClass(Publisher);
