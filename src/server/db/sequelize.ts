import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import { UserTheme } from './models/UserTheme';

const sequelizeOptions: SequelizeOptions = {
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'newPassword',
  database: 'redgreen',
  dialect: 'postgres',
};

export const sequelize = new Sequelize(sequelizeOptions);

sequelize.addModels([UserTheme]);
