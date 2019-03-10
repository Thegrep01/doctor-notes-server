import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Client } from 'src/client/db/client.model';

@Table
export class Doctor extends Model<Doctor> {
    @Column({ primaryKey: true })
    id: number;

    @Column
    firstname: string;

    @Column
    lastname: string;

    @Column
    login: string;

    @Column
    password: string;

    @Column
    token: string;

    @HasMany(() => Client)
    players: Client[];
}
