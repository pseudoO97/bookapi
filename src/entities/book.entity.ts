import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {ApiProperty} from "@nestjs/swagger";

export type BookDocument = Book & Document;

//Auriane
@Schema()
export class Book {

    @ApiProperty({example: "Le seigneur des anneaux", description: "Set the title of the book"})
    @Prop({type: String, required: true})
    title: string;

    @ApiProperty({example: "Dans la contré...", description: "Set the summary of the book"})
    @Prop({type: String, required: true})
    summary: string;

    @ApiProperty({example: "http://url/mon-image.jpg", description: "Set the preview image of the book"})
    @Prop({type: String, required: true})
    link_preview: string;

    @ApiProperty({example: "2015-02-15", description: "Set the release date of the book"})
    @Prop({type: Date, required: true})
    date_released: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);
