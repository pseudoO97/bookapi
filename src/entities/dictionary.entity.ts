import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";

@Entity({ name: "dictionnaries"})
export class DictionaryEntity {

    @PrimaryGeneratedColumn()
    @ApiProperty({example: 1, description:"The id of the dictionnary"})
    id: number;

    @Column()
    @ApiProperty({example: "label", description: "The name of dictionnary"})
    name: string;

}
