import { UserResponse } from 'api/api.types';
import { ApiHelper } from 'helpers/ApiHelper';

import { SignInRequest, SignUpRequest, SignUpResponse } from './AuthApi.types';

export const AuthApi = {
  async getUser() {
    const response = await ApiHelper.get<UserResponse>('/auth/user');

    return response.data;
  },

  async signUp(data: SignUpRequest) {
    const response = await ApiHelper.post<SignUpResponse>('/auth/signup', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  },

  signIn(data: SignInRequest) {
    return ApiHelper.post('/auth/signin', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  signOut() {
    return ApiHelper.post('/auth/logout');
  },
};
