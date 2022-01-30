import { Emotion } from '../models/Emotion';
import { BaseRESTService } from './BaseRESTService';

type CreateRequest = {
  commentId: number;
  creatorId: number;
  emotion: 'like' | 'dislike';
};

type UpdateRequest = {
  commentId: number;
  creatorId: number;
  emotion: 'like' | 'dislike' | null;
};

type FindRequest = {
  commentId: number;
  creatorId: number;
};

export class EmotiontService implements BaseRESTService {
  public static create = (data: CreateRequest) => {
    return Emotion.create(data);
  };

  public static update = (data: UpdateRequest) => {
    return Emotion.update(data, {
      where: {
        commentId: data.commentId,
        creatorId: data.creatorId,
      },
    });
  };

  public static find = (data: FindRequest) => {
    return Emotion.findOne({
      where: {
        commentId: data.commentId,
        creatorId: data.creatorId,
      },
    });
  };

  public static req = () => {
    return Emotion.findAll();
  };
}
