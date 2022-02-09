import { Sequelize } from 'sequelize-typescript';

import { Comment } from '../models/Comment';
import { Emotion } from '../models/Emotion';
import { Topic } from '../models/Topic';
import { User } from '../models/User';
import { BaseRESTService } from './BaseRESTService';

interface FindRequest {
  slug: string;
  userId: number;
}

type CreateRequest = {
  creatorId: number;
  slug: string;
  title: string;
};

export class TopicService implements BaseRESTService {
  public static find = ({ slug, userId }: FindRequest) => {
    return Topic.findOne({
      attributes: ['id', 'slug', 'title', 'creatorId', 'creationDate'],
      where: { slug },
      include: [
        {
          model: Comment,
          required: false,
          where: { parentCommentId: null },
          attributes: [
            'id',
            'text',
            'creationDate',
            'topicId',
            'creatorId',
            [Sequelize.fn('COUNT', Sequelize.col('comments->likes.id')), 'likesCount'],
            [Sequelize.fn('COUNT', Sequelize.col('comments->dislikes.id')), 'dislikesCount'],
            [Sequelize.fn('COUNT', Sequelize.col('comments->replies.id')), 'repliesCount'],
            [Sequelize.fn('MAX', Sequelize.col('comments->userEmotions.emotion')), 'userEmotion'],
          ],
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
            {
              model: User,
              attributes: ['userId', 'name', 'avatar'],
            },
          ],
        },
        {
          model: User,
          attributes: ['userId', 'name', 'avatar'],
        },
      ],
      group: ['Topic.id', 'comments.id', 'creator.user_id', 'comments->creator.user_id'],
    });
  };

  public static request = () => {
    return Topic.findAll({
      attributes: [
        'id',
        'slug',
        'title',
        'creatorId',
        'creationDate',
        [Sequelize.fn('COUNT', Sequelize.col('comments.id')), 'commentsCount'],
      ],
      include: [
        {
          model: Comment,
          attributes: [],
        },
        {
          model: User,
          attributes: ['userId', 'name', 'avatar'],
        },
      ],
      group: ['Topic.id', 'creator.user_id'],
    });
  };

  public static create = (data: CreateRequest) => {
    return Topic.create(data);
  };
}
