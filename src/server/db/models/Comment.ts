import {
  AllowNull,
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { Emotion } from './Emotion';
import { Topic } from './Topic';

interface CreateAttributes {
  creatorId: number;
  parentCommentId: number | null;
  text: string;
  topicId: number;
}

@Table({
  paranoid: true,
  tableName: 'comment',
})
export class Comment extends Model<CreateAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  text: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'creator_id',
  })
  creatorId: number;

  @CreatedAt
  creationDate: Date;

  @ForeignKey(() => Topic)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'topic_id',
  })
  topicId: number;

  @ForeignKey(() => Comment)
  @Column({
    type: DataType.INTEGER,
    field: 'parent_comment_id',
  })
  parentCommentId: number | null;

  @HasMany(() => Comment)
  replies: Comment[];

  @HasMany(() => Emotion)
  emotions: Emotion[];
}
