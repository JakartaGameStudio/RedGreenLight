import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserService } from 'server/db/services/UserService';

export class UserAPI {
  public static login = async (request: Request, response: Response) => {
    try {
      const { userId } = request.body;
      const token = jwt.sign({ userId: userId }, 'MY_SECRET_KEY');
      const record = await UserService.find({ userId: Number(userId) });

      if (!record) {
        await UserService.create({ userId: Number(userId) });
      }

      return response.cookie('access_token', token).status(200).json({ status: 'success' });
    } catch (err) {
      return response.status(400).json(err);
    }
  };

  public static logout = (request: Request, response: Response) => {
    return response
      .clearCookie('access_token')
      .status(200)
      .json({ message: 'Successfully logged out 😏 🍀' });
  };
}
