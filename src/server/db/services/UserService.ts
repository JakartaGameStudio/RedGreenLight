import { Themes } from 'types/Themes';

import { User } from '../models/User';
import { BaseRESTService } from './BaseRESTService';

type FindRequest = {
  userId: number;
};

type UpdateRequest = Partial<CreateRequest>;

type CreateRequest = {
  avatar: string | null;
  name: string;
  userId: number;
  themeId?: number;
};

export class UserService implements BaseRESTService {
  public static find = ({ userId }: FindRequest) => {
    return User.findByPk(userId);
  };

  public static update = (data: UpdateRequest) => {
    return User.update(data, {
      where: {
        userId: data.userId,
      },
    });
  };

  public static findOrCreate = (data: CreateRequest) => {
    return User.findOrCreate({
      where: { userId: data.userId },
      defaults: {
        ...data,
        themeId: Themes.default,
      },
    });
  };
}
