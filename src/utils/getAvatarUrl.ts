import { ApiEndpoints } from 'types/Api';

export function getAvatarUrl(avatar: string) {
  return avatar ? `${ApiEndpoints.praktikumApi}${ApiEndpoints.resources}/${avatar}` : undefined;
}
