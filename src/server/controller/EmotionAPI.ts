import { Request, Response } from 'express';
import { EmotiontService } from 'server/db/services/EmotiontService';

export class EmotionAPI {
  public static createOrUpdate = async (request: Request, response: Response) => {
    try {
      const { user } = response.locals;
      const { commentId, emotion } = request.body;
      const emotionRow = await EmotiontService.find({
        commentId,
        creatorId: user.id,
      });

      if (emotionRow) {
        await EmotiontService.update({
          commentId,
          emotion,
          creatorId: user.id,
        });
      } else {
        await EmotiontService.create({
          commentId,
          emotion,
          creatorId: user.id,
        });
      }

      response.status(200).json({ result: 'success' });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);

      return response.sendStatus(400);
    }
  };
}
