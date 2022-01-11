import { SchemaFactory } from '@nestjs/mongoose';

export class Book {
  /**
   * Auriane
   * 
   */
   /**
    * The id of the book
    */
   id: bigint;
   title: string;
   summary: string;
   link_preview: string;
   date_released: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);
