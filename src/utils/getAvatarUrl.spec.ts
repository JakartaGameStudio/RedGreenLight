import { ApiEndpoints } from 'types/Api';

import { getAvatarUrl } from './getAvatarUrl';

describe('getAvatarUrl', () => {
  test('should return avatar path', () => {
    expect(getAvatarUrl('avatar')).toBe(
      `${ApiEndpoints.praktikumApi}${ApiEndpoints.resources}/avatar`,
    );
  });

  test('should return undefined if param is falsy', () => {
    expect(getAvatarUrl('')).toBeUndefined();
  });
});
