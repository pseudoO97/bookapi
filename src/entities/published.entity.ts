import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class Published {
 // Auriane

  @Prop()
  id_published: bigint;

  @Prop()
  id_publisher: number;
}
export const PublishedSchema = SchemaFactory.createForClass(Published);