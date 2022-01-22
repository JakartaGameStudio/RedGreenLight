import { Sequelize as sequelize } from 'sequelize-typescript';

import { Comment } from '../models/Comment';
import { Topic } from '../models/Topic';
import { BaseRESTService } from './BaseRESTService';

interface FindRequest {
  slug: string;
}

type CreateRequest = {
  creatorId: number;
  slug: string;
  title: string;
};

export class TopicService implements BaseRESTService {
  public static find = ({ slug }: FindRequest) => {
    return Topic.findOne({ where: { slug }, include: [Comment] });
  };

  public static request = () => {
    return Topic.findAll({
      attributes: {
        exclude: ['comments'],
        include: [[sequelize.fn('COUNT', sequelize.col('comments')), 'commentsCount']],
      },
      include: [Comment],
    });
  };

  public static create = (data: CreateRequest) => {
    return Topic.create(data);
  };
}
