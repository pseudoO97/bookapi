/**
 * Dorian Jullian
 */
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type DictionaryDocument = Dictionary & Document;

@Schema()
export class Dictionary {


    /**
     * The name of the dictionary collection
     * @example My Sci-fi Collec
     */
    @Prop()
    name: string;


}

export const DictionarySchema = SchemaFactory.createForClass(Dictionary);