import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
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
import { User } from './User';

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

  @ForeignKey(() => User)
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
  parentCommentId: number;

  @HasMany(() => Comment)
  replies: Comment[];

  @HasMany(() => Emotion)
  likes: Emotion[];

  @HasMany(() => Emotion)
  dislikes: Emotion[];

  @HasMany(() => Emotion)
  userEmotions: Emotion[];

  @BelongsTo(() => User)
  creator: User;
}
