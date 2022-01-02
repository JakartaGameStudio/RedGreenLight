import { ApiHelper } from './ApiHelper';

describe('ApiHelper', () => {
  test('should return AXIOS instance with url', () => {
    const instance = ApiHelper;

    expect(instance.defaults.baseURL).toBe('https://ya-praktikum.tech/api/v2');
  });
});
