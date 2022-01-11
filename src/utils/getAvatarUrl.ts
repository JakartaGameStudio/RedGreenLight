import { ApiEndpoints } from 'types/Api';

export function getAvatarUrl(avatar: string) {
  return avatar ? `${ApiEndpoints.resources}/${avatar}` : undefined;
}
