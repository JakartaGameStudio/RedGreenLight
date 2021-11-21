import { UserResponse } from 'api/api.types';
import {
  ChangePasswordRequest,
  FindUserRequest,
  UserUpdateRequest,
} from 'api/UsersApi/UsersApi.types';
import { ApiHelper } from 'helpers/ApiHelper';

export const UsersApi = {
  async getUserById(id: number) {
    const response = await ApiHelper.get<UserResponse>(`/user/${id}`);

    return response.data;
  },
  async updateProfile(data: UserUpdateRequest) {
    const response = await ApiHelper.put<UserResponse>(`/user/profile`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  },
  async updatePassword(data: ChangePasswordRequest) {
    const response = await ApiHelper.put(`/user/password`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  },
  async updateAvatar(file: File) {
    const data = new FormData();

    data.append('avatar', file);

    const response = await ApiHelper.put<UserResponse>(`/user/profile/avatar`, data);

    return response.data;
  },
  async searchUserByLogin(data: FindUserRequest) {
    const response = await ApiHelper.post<UserResponse[]>(`/user/search`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  },
};
