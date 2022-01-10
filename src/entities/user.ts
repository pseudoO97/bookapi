/**
 * Dorian Jullian
 */
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {

    /**
     * The pseudo of the user
     * @example John
     */
    @Prop()
    pseudo: string;

    /**
     * The password of the user
     * @example hash
     */
    @Prop()
    password: string;

    /**
     * The email of the user
     */
    @Prop()
    email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);