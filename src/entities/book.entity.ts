import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class Book {
  /**
   * Auriane
   * 
   */
   /**
    * The id of the book
    */
  id: bigint;


  @Prop()
  title: string;
  @ApiProperty({
  example: 'Maine Coon',
  description: 'The breed of the Cat',
  })

  @Prop()
  summary: string;

  @Prop()
  link_preview: string;

  @Prop()
  date_released: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);
