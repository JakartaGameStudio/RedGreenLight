import { ApiRoutes } from 'types/ApiRoutes';

export function getAvatarUrl(avatar: string) {
  return avatar ? `${ApiRoutes.resources}/${avatar}` : undefined;
}
