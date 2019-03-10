import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Doctor } from 'src/doctor/db/doctor.model';

@Table
export class Client extends Model<Client> {
    @Column({ primaryKey: true })
    id: number;

    @Column
    firstname: string;

    @Column
    lastname: string;

    @Column
    telnum: string;

    @Column
    status: number;

    @ForeignKey(() => Doctor)
    @Column
    DoctorID: number;
}
