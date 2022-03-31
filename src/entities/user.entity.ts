import {BeforeInsert, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import * as bcrypt from 'bcrypt';

@Entity({name:"users"})
export class UserEntity {

    @PrimaryGeneratedColumn()
    @ApiProperty({example: 1, description:"The id of the user", readOnly: true})
    id: number;

    @Column({ nullable: false})
    @ApiProperty({example: "John", description: "pseudo of users"})
    pseudo: string;

    @Column({ nullable: false})
    @ApiProperty({example: "John", description: "pseudo of users"})
    password: string;

    @Column({ nullable: false})
    @ApiProperty({example: "John", description: "pseudo of users"})
    email: string;

    @ApiProperty({readOnly: true, example: "???", description: "Current token app validity"})
    token?: string;

    @BeforeInsert()
    async setPassword() {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);
    }
}
