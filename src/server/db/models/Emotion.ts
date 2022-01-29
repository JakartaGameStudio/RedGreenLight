import {
  AllowNull,
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { Comment } from './Comment';

interface CreateAttributes {
  commentId: number;
  creatorId: number;
  emotion: 'like' | 'dislike' | null;
}

@Table({
  paranoid: true,
  tableName: 'emotion',
})
export class Emotion extends Model<CreateAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  emotion: 'like' | 'dislike';

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'creator_id',
  })
  creatorId: number;

  @CreatedAt
  creationDate: Date;

  @ForeignKey(() => Comment)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'comment_id',
  })
  commentId: number;
}
