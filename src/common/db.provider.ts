import { Sequelize } from 'sequelize-typescript';
import { Doctor } from '../doctor/db/doctor.model';
import { Client, Note, Problems } from '../client/db/client.model';

// tslint:disable-next-line: typedef
export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      const sequelize: Sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'us-cdbr-iron-east-02.cleardb.net',
        port: 3306,
        username: 'b2c11e6c281f49',
        password: '71fa82b8',
        database: 'heroku_65dbddea35ee7df',
      });
      sequelize.addModels([Doctor, Client, Note, Problems]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
