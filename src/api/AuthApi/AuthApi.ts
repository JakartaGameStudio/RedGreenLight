import { ApiHelper } from 'helpers/ApiHelper';

import { AuthApiSignInRequest, AuthApiSignUpRequest, AuthApiSignUpResponse } from './AuthApi.types';

export const AuthApi = {
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
