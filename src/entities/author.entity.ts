import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
 
@Entity({name:"authors"})
export class AuthorEntity {

    @PrimaryGeneratedColumn()
    @ApiProperty({example: 1, description:"The id of the author"})
    id: number;

    @Column()
    @ApiProperty({example: "Albert", description:"The last name of the author"})
    lastName: string;

    @Column()
    @ApiProperty({example: "Kling", description:"The first name of the author"})
    firstName: string;

}
