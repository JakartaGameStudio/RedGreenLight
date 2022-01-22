import { Comment } from '../models/Comment';
import { BaseRESTService } from './BaseRESTService';

type RequestRequest = {
  parentCommentId: number;
};

type CreateRequest = {
  creatorId: number;
  parentCommentId: number | null;
  text: string;
  topicId: number;
};

export class CommentService implements BaseRESTService {
  public static request = ({ parentCommentId }: RequestRequest) => {
    return Comment.findAll({ where: { parentCommentId } });
  };

  public static create = (data: CreateRequest) => {
    return Comment.create(data);
  };
}
