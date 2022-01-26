import { Request, Response } from 'express';
import { TopicService } from 'server/db/services/TopicService';
import slugCreator from 'slug';

export class TopicAPI {
  public static findBySlug = async (req: Request, response: Response) => {
    try {
      const { slug } = req.params;
      const { userId } = response.locals;
      const topic = await TopicService.find({ slug, userId });

      if (topic) {
        response.status(200).json(topic);
      } else {
        response.sendStatus(404);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);

      response.status(400).send(err);
    }
  };

  public static request = async (request: Request, response: Response) => {
    try {
      const topics = await TopicService.request();

      response.status(200).json({ topics: topics });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);

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

      response.status(200).json({ slug: topic.slug, id: topic.id });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);

      return response.sendStatus(400);
    }
  };
}
