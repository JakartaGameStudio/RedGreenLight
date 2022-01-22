import { Request, Response } from 'express';
import { TopicService } from 'server/db/services/TopicService';
import slugCreator from 'slug';

export class CommentAPI {
  public static getReplies = (req: Request, response: Response) => {
    try {
      //const { slug } = req.params;
      //const topic = await CommentService.request({});
      // if (topic) {
      //   response.status(200).json(topic);
      // } else {
      //   response.sendStatus(404);
      // }
    } catch (err) {
      response.status(400).send(err);
    }
  };

  public static request = async (request: Request, response: Response) => {
    try {
      const topics = await TopicService.request();

      response.status(200).json({ topics: topics });
    } catch {
      return response.sendStatus(400);
    }
  };

  public static create = async (request: Request, response: Response) => {
    try {
      const { userId } = response.locals;
      const { title } = request.body;
      const slugTitle = slugCreator(title);
      const topic = await TopicService.create({
        title,
        creatorId: userId,
        slug: slugTitle,
      });

      response.status(200).json({ slug: topic.slug });
    } catch {
      return response.sendStatus(400);
    }
  };
}
