import { ApiRoutes } from 'types/ApiRoutes';

import { getAvatarUrl } from './getAvatarUrl';

describe('getAvatarUrl', () => {
  test('should return avatar path', () => {
    expect(getAvatarUrl('avatar')).toBe(`${ApiRoutes.resources}/avatar`);
  });

  test('should return underfind if param is falsy', () => {
    expect(getAvatarUrl('')).toBeUndefined();
  });
});
