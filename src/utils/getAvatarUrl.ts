import { ApiEndpoints } from 'types/Api';

export function getAvatarUrl(avatar: string) {
  return avatar ? `${ApiEndpoints.baseURL}${ApiEndpoints.resources}/${avatar}` : undefined;
}
