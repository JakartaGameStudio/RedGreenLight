import { Request, Response } from 'express';
import { UserService } from 'server/db/services/UserService';

export class ThemeAPI {
  public static findByUserId = async (req: Request, response: Response) => {
    const { userId } = response.locals;

    try {
      const record = await UserService.find({ userId: Number(userId) });

      return response.status(200).json(record);
    } catch {
      return response.sendStatus(400);
    }
  };

  public static update = async (request: Request, response: Response) => {
    const { userId } = response.locals;
    const { themeId } = request.body;

    try {
      await UserService.update({ userId: Number(userId), themeId: Number(themeId) });

      return response.status(200).json({ message: 'Successfully changed' });
    } catch {
      return response.sendStatus(400);
    }
  };
}
