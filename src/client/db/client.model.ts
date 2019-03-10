import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Doctor } from '../../doctor/db/doctor.model';

@Table
export class Client extends Model<Client> {
    @Column({ primaryKey: true })
    public id!: number;

    @Column
    public firstname!: string;

    @Column
    public lastname!: string;

    @Column
    public telnum?: string;

    @Column
    public status!: number;

    @ForeignKey(() => Doctor)
    @Column
    // tslint:disable-next-line: variable-name
    public DoctorID!: number;
}
