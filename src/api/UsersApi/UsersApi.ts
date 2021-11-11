import {
  UsersApiAvatarRequest,
  UsersApiFindRequest,
  UsersApiPasswordRequest,
  UsersApiUpdateRequest,
  UsersApiUser,
} from './UsersApi.types';

const API_URL = 'https://ya-praktikum.tech/api/v2/user';

export const UsersApi = {
  async getUser(id: number): Promise<UsersApiUser> {
    const request = await fetch(`${API_URL}/${id}`, {
      credentials: 'include',
    });

    return await request.json();
  },
  async profile(data: UsersApiUpdateRequest): Promise<UsersApiUser> {
    const request = await fetch(`${API_URL}/profile`, {
      method: 'PUT',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await request.json();
  },
  async password(data: UsersApiPasswordRequest): Promise<UsersApiUser> {
    const request = await fetch(`${API_URL}/password`, {
      method: 'PUT',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await request.json();
  },
  async profileAvatar(data: UsersApiAvatarRequest): Promise<UsersApiUser> {
    const request = await fetch(`${API_URL}/profile/avatar`, {
      body: data,
      method: 'PUT',
      credentials: 'include',
    });

    return await request.json();
  },
  async search(data: UsersApiFindRequest): Promise<UsersApiUser[]> {
    const request = await fetch(`${API_URL}/search`, {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await request.json();
  },
};
