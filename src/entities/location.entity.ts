import {ApiProperty} from "@nestjs/swagger";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name:"locations"})
export class LocationEntity {

   @PrimaryGeneratedColumn()
   @ApiProperty({example: 1, description:"The id of the publisher"})
   id: number;

   @Column()
   @ApiProperty({example: "France", description: "Set the country location"})
   country : string;

   @Column()
   @ApiProperty({example: "Aldi", description: "Set the name of book shop"})
   name: string;

}
