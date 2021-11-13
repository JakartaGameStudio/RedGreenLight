import { ApiHelper } from 'helpers/ApiHelper';

import {
  UsersApiAvatarRequest,
  UsersApiPasswordRequest,
  UsersApiSearchRequest,
  UsersApiUpdateRequest,
  UsersApiUser,
} from './UsersApi.types';

export const UsersApi = {
  async getUser(id: number) {
    const response = await ApiHelper.get<UsersApiUser>(`/user/${id}`);

    return response.data;
  },
  async updateProfile(data: UsersApiUpdateRequest) {
    const response = await ApiHelper.put<UsersApiUser>(`/user/profile`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  },
  async updatePassword(data: UsersApiPasswordRequest) {
    const response = await ApiHelper.put<UsersApiUser>(`/user/password`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  },
  async updateAvatar(data: UsersApiAvatarRequest) {
    const response = await ApiHelper.put<UsersApiUser>(`/user/profile/avatar`, data);

    return response.data;
  },
  async searchUserByLogin(data: UsersApiSearchRequest) {
    const response = await ApiHelper.post<UsersApiUser[]>(`/user/search`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  },
};
