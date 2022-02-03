import { ApiEndpoints, ApiUrl } from 'types/Api';

import { getAvatarUrl } from './getAvatarUrl';

describe('getAvatarUrl', () => {
  test('should return avatar path', () => {
    expect(getAvatarUrl('avatar')).toBe(`${ApiUrl.praktikum}${ApiEndpoints.resources}/avatar`);
  });

  test('should return undefined if param is falsy', () => {
    expect(getAvatarUrl('')).toBeUndefined();
  });
});
