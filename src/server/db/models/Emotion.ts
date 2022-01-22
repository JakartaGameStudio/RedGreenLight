import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { Comment } from './Comment';

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'emotion',
})
export class Emotion extends Model<Emotion> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'creator_id',
  })
  creatorId: number;

  @ForeignKey(() => Comment)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'comment_id',
  })
  commentId: number;

  @Column({
    type: DataType.STRING,
    field: 'emotion_type',
  })
  emotionType: 'like' | 'dislike' | null;
}
