import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";

@Entity({name: "books"})
export class BookEntity {

    @PrimaryGeneratedColumn()
    @ApiProperty({example: 1, description:"The id of the book"})
    id: number;

    @Column()
    @ApiProperty({example: 1, description:"The title of the book"})
    title: string;

    @Column()
    @ApiProperty({example: 1, description:"The summary of the book"})
    summary: string;

    @Column()
    @ApiProperty({example: 1, description:"The image preview of the book"})
    link_preview: string;

    @Column()
    @ApiProperty({example: 1, description:"The release date of the book"})
    date_released: Date;

}
