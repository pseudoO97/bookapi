import { ApiProperty } from '@nestjs/swagger';
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "publishers"})
export class PublisherEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({example: 1, description:"The id of the publisher"})
  id: number;

  @Column()
  @ApiProperty({example:"Glenat", description: "The publisher book's"})
  name: string;

}

