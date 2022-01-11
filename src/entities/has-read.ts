/**
 * Dorian Jullian
 */
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type HasReadDocument = HasRead & Document;

@Schema()
export class HasRead {

    @Prop()
    id_user: bigint;

    @Prop({ nullable: true })
    id_dictionary: bigint;

    @Prop()
    id_book: bigint;

    @Prop()
    note: number;

    @Prop()
    commentary: string;
}

export const HasReadSchema = SchemaFactory.createForClass(HasRead);