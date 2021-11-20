import { UsersApiUser } from 'api/UsersApi/UsersApi.types';
import { ApiHelper } from 'helpers/ApiHelper';

import { AuthApiSignInRequest, AuthApiSignUpRequest, AuthApiSignUpResponse } from './AuthApi.types';

export const AuthApi = {
  async getUser(): Promise<UsersApiUser> {
    const response = await ApiHelper.get('/auth/user');

    return response.data;
  },

  async signUp(data: AuthApiSignUpRequest) {
    const response = await ApiHelper.post<AuthApiSignUpResponse>('/auth/signup', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  },

  signIn(data: AuthApiSignInRequest) {
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
