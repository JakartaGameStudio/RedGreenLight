import { Themes } from 'types/Themes';

import { UserTheme } from '../models/UserTheme';
import { BaseRESTService } from './BaseRESTService';

interface FindRequest {
  userId: number;
}

type CreateRequest = FindRequest;

interface UpdateRequest {
  themeId: number;
  userId: number;
}

export class UserService implements BaseRESTService {
  public static find = ({ userId }: FindRequest) => {
    return UserTheme.findByPk(userId);
  };

  public static create = (data: CreateRequest) => {
    return UserTheme.create({
      ...data,
      themeId: Themes.light,
    });
  };

  public static update = (data: UpdateRequest) => {
    return UserTheme.update(data, {
      where: {
        userId: data.userId,
      },
    });
  };
}
