import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  HasMany,
  Index,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

import { Comment } from './Comment';
import { User } from './User';

interface TopicAttributes {
  creatorId: number;
  slug: string;
  title: string;
}

@Table({
  paranoid: true,
  tableName: 'topic',
})
export class Topic extends Model<TopicAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @Index
  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  slug: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  title: string;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  creatorId: number;

  @CreatedAt
  creationDate: Date;

  @HasMany(() => Comment)
  comments: Comment[];

  @BelongsTo(() => User)
  creator: User;
}
