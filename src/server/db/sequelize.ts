import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import { UserTheme } from './models/UserTheme';
const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } = process.env;
const sequelizeOptions: SequelizeOptions = {
  host: 'localhost',
  port: 5432,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  dialect: 'postgres',
};

export const sequelize = new Sequelize(sequelizeOptions);

sequelize.addModels([UserTheme]);
