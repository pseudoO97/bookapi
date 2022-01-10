/**
 * Dorian Jullian
 */
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type CategoryDocument = Category & Document;

@Schema()
export class Category {

    /**
     * The name of the category
     * @example Sci-fi
     */
    @Prop()
    name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);