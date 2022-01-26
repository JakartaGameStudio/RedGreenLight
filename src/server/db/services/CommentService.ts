import { Sequelize } from 'sequelize-typescript';

import { Comment } from '../models/Comment';
import { Emotion } from '../models/Emotion';
import { BaseRESTService } from './BaseRESTService';

type RequestRequest = {
  parentCommentId: number;
  userId: number;
};

type CreateRequest = {
  creatorId: number;
  parentCommentId: number | null;
  text: string;
  topicId: number;
};

export class CommentService implements BaseRESTService {
  public static request = ({ parentCommentId, userId }: RequestRequest) => {
    return Comment.findAll({
      attributes: [
        'creationDate',
        'creatorId',
        'id',
        'parentCommentId',
        'text',
        'topicId',
        [Sequelize.fn('COUNT', Sequelize.col('replies.id')), 'repliesCount'],
        [Sequelize.fn('COUNT', Sequelize.col('dislikes.id')), 'dislikesCount'],
        [Sequelize.fn('COUNT', Sequelize.col('likes.id')), 'likesCount'],
        [Sequelize.fn('MAX', Sequelize.col('userEmotions.emotion')), 'userEmotion'],
      ],
      where: { parentCommentId },
      include: [
        {
          model: Comment,
          attributes: [],
        },
        {
          model: Emotion,
          attributes: [],
          required: false,
          as: 'likes',
          where: {
            emotion: 'like',
          },
        },
        {
          model: Emotion,
          attributes: [],
          required: false,
          as: 'dislikes',
          where: {
            emotion: 'dislike',
          },
        },
        {
          model: Emotion,
          attributes: [],
          required: false,
          as: 'userEmotions',
          where: {
            creatorId: userId,
          },
        },
      ],
      group: ['Comment.id'],
    });
  };

  public static create = (data: CreateRequest) => {
    return Comment.create(data);
  };
}
