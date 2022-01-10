/**
 * Dorian Jullian
 */
import {Prop, Schema} from "@nestjs/mongoose";

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