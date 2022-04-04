import {Column, Entity,PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "has_read"})
export class HasReadEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    note: number;

    @Column()
    commentary: string;

}
