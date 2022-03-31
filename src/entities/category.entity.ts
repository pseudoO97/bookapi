import {ApiProperty} from "@nestjs/swagger";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "categories"})
export class CategoryEntity {

    @PrimaryGeneratedColumn()
    @ApiProperty({example: 1, description: "The id of the category.", readOnly: true})
    id: number;

    @Column()
    @ApiProperty({example: "Sci-fi", description: "The category or tag book."})
    name: string;
}
