import { Request, Response } from 'express';
import { CommentService } from 'server/db/services/CommentService';

export class CommentAPI {
  public static getReplies = async (req: Request, response: Response) => {
    try {
      const { user } = response.locals;
      const { id } = req.params;
      const replies = await CommentService.request({
        parentCommentId: +id,
        userId: user.id,
      });

      response.status(200).json({ replies });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      response.status(400).send(err);
    }
  };

  public static create = async (request: Request, response: Response) => {
    try {
      const { user } = response.locals;
      const { text, topicId, parentCommentId } = request.body;
      const comment = await CommentService.create({
        creatorId: user.id,
        parentCommentId,
        text,
        topicId,
      });

      response.status(200).json(comment);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);

      return response.sendStatus(400);
    }
  };
}
