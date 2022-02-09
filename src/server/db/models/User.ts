import {
  AllowNull,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { Comment } from './Comment';
import { Topic } from './Topic';

interface UserAttributes {
  avatar: string | null;
  name: string;
  themeId: number;
  userId: number;
}

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'user',
})
export class User extends Model<UserAttributes> {
  @PrimaryKey
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
  userId: number;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'theme_id',
  })
  themeId: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  avatar: string;

  @HasMany(() => Topic)
  topics: Topic[];

  @HasMany(() => Comment)
  comments: Comment[];
}
