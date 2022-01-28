import { Request, Response } from 'express';
import { UserService } from 'server/db/services/UserService';

export class UserAPI {
  public static changeTheme = async (request: Request, response: Response) => {
    try {
      const { user } = response.locals;
      const { themeId } = request.body;

      await UserService.update({ userId: user.id, themeId });

      return response.status(200).json({ status: 'success' });
    } catch (err) {
      return response.status(400).json(err);
    }
  };

  public static get = async (request: Request, response: Response) => {
    try {
      const { user } = response.locals;
      const userData = {
        userId: user.id,
        name: user.display_name || user.login,
        avatar: user.avatar,
      };
      const [currentUser, created] = await UserService.findOrCreate(userData);

      if (!created) {
        await UserService.update(userData);
      }

      user.theme_id = currentUser.themeId;

      response.status(200).json(user);
    } catch (error) {
      console.info(error);
      response.status(400).send(error);
    }
  };
}
