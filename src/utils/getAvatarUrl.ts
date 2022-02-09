import { ApiEndpoints, ApiUrl } from 'types/Api';

export function getAvatarUrl(avatar: string) {
  return avatar ? `${ApiUrl.praktikum}${ApiEndpoints.resources}/${avatar}` : undefined;
}
