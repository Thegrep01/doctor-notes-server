import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Client } from '../../client/db/client.model';

@Table
export class Doctor extends Model<Doctor> {
  @Column({ primaryKey: true, autoIncrement: true })
  public id!: number;

  @Column
  public firstname!: string;

  @Column
  public lastname!: string;

  @Column
  public login!: string;

  @Column
  public password!: string;

  @Column
  public token?: string;

  @HasMany(() => Client)
  public clients?: Client[];
}
