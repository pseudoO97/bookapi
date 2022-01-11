/**
 * Dorian Jullian
 */
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

export type HasCategoryDocument = BookHasCategory & Document;

@Schema()
export class BookHasCategory {
    /**
     * The id of the book linked
     * @example 2
     */
    @Prop()
    id_book: bigint;

    /**
     * The id of the category linked to the book
     */
    @Prop()
    id_category: bigint;
}

export const HasCategorySchema = SchemaFactory.createForClass(BookHasCategory);