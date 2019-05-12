import { Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Doctor } from '../../doctor/db/doctor.model';

// tslint:disable-next-line:max-classes-per-file
@Table
export class Problems extends Model<Problems> {
    @Column({ primaryKey: true })
    public name!: string;

    @ForeignKey(() => Client)
    @Column
    public clientId!: number;
}

@Table
export class Client extends Model<Client> {
    @Column({ primaryKey: true, autoIncrement: true })
    public id!: number;

    @Column
    public firstname!: string;

    @Column
    public lastname!: string;

    @Column
    public telnum?: string;

    @Column
    public height!: number;

    @Column
    public weight!: number;

    @HasMany(() => Problems)
    public problems?: Problems[];

    @Column
    public status!: number;

    @ForeignKey(() => Doctor)
    @Column
    // tslint:disable-next-line: variable-name
    public DoctorID!: number;
}

// tslint:disable-next-line: max-classes-per-file
@Table
export class Note extends Model<Note> {
    @Column({ primaryKey: true, autoIncrement: true })
    public id!: number;

    @Column
    public title!: string;

    @Column
    public note!: string;

    @Column
    public medication?: string;

    @Column
    public activityCode!: string;

    @Column
    public date!: Date;

    @Column
    public diagnosis?: string;

    @ForeignKey(() => Client)
    @Column
    // tslint:disable-next-line: variable-name
    public CLientID!: number;
}
