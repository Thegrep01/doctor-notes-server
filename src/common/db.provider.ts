import { Sequelize } from 'sequelize-typescript';
import { Doctor } from '../doctor/db/doctor.model';
import { Client } from 'src/client/db/client.model';

export const databaseProviders = [
    {
        provide: 'SequelizeToken',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'password',
                database: 'DoctorNotes',
            });
            sequelize.addModels([Doctor, Client]);
            await sequelize.sync();
            return sequelize;
        },
    },
];