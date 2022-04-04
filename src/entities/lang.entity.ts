import { ApiProperty } from '@nestjs/swagger';
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "langs"})
export class LangEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({example: 1, description:"The id of the lang"})
  id: number;

  @Column()
  @ApiProperty({example: "Français", description: "The book lang translation"})
  name: string;
}
