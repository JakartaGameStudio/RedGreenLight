import axios from 'axios';

import {
  UsersApiAvatarRequest,
  UsersApiPasswordRequest,
  UsersApiSearchRequest,
  UsersApiUpdateRequest,
  UsersApiUser,
} from './UsersApi.types';

const API_URL = 'https://ya-praktikum.tech/api/v2/user';

export const UsersApi = {
  async getUser(id: number) {
    const response = await axios.get<UsersApiUser>(`${API_URL}/${id}`, {
      withCredentials: true,
    });

    return response.data;
  },
  async updateProfile(data: UsersApiUpdateRequest) {
    const response = await axios.put<UsersApiUser>(`${API_URL}/profile`, data, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  },
  async updatePassword(data: UsersApiPasswordRequest) {
    const response = await axios.put<UsersApiUser>(`${API_URL}/password`, data, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  },
  async updateAvatar(data: UsersApiAvatarRequest) {
    const response = await axios.put<UsersApiUser>(`${API_URL}/profile/avatar`, data, {
      withCredentials: true,
    });

    return response.data;
  },
  async searchUserByLogin(data: UsersApiSearchRequest) {
    const response = await axios.post<UsersApiUser[]>(`${API_URL}/search`, data, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  },
};
