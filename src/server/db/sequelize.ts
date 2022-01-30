import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import { Comment } from './models/Comment';
import { Emotion } from './models/Emotion';
import { Topic } from './models/Topic';
import { User } from './models/User';

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT, POSTGRES_HOST } = process.env;
const sequelizeOptions: SequelizeOptions = {
  host: POSTGRES_HOST,
  port: +POSTGRES_PORT,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  dialect: 'postgres',
};

export const sequelize = new Sequelize(sequelizeOptions);

sequelize.addModels([User, Topic, Comment, Emotion]);
