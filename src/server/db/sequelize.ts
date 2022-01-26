import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import { Comment } from './models/Comment';
import { Emotion } from './models/Emotion';
import { Topic } from './models/Topic';
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

sequelize.addModels([UserTheme, Topic, Comment, Emotion]);
