import { Comment } from '../models/Comment';
import { Topic } from '../models/Topic';
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
  public static find = ({ slug }: FindRequest) => {
    return Topic.findOne({
      attributes: ['id', 'slug', 'title', 'creatorId', 'creationDate'],
      where: { slug },
      include: [
        {
          model: Comment,
          where: { parentCommentId: null },
        },
      ],
    });
  };

  public static request = () => {
    return Topic.findAll({
      include: {
        model: Comment,
      },
    }).then((topics) =>
      topics.map((topic) => ({
        creationDate: topic.creationDate,
        creatorId: topic.creatorId,
        id: topic.id,
        slug: topic.slug,
        title: topic.title,
        commentsCount: topic.comments.length,
      })),
    );
  };

  public static create = (data: CreateRequest) => {
    return Topic.create(data);
  };
}
