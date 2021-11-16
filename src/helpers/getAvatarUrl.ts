import { UsersApiUser } from 'api/UsersApi/UsersApi.types';
import { ApiRoutes } from 'types/ApiRoutes';

export function getAvatarUrl(avatar: UsersApiUser['avatar']) {
  return avatar ? `${ApiRoutes.resources}/${avatar}` : undefined;
}
