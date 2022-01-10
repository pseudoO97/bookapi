import {SchemaFactory} from "@nestjs/mongoose";

export type DictionaryCategoryDocument = DictionaryHasCategory & Document;

/**
 * Dorian Jullian
 */
export class DictionaryHasCategory {

    /**
     * The id of the dictionary
     */
    id_dictionary: bigint;

    /**
     * The id of the category in the dictionary
     */
    id_category: bigint;

}

export const DictionaryCategorySchema = SchemaFactory.createForClass(DictionaryHasCategory);