import axios from 'axios';

import { AuthApiSignInRequest, AuthApiSignUpRequest, AuthApiSignUpResponse } from './AuthApi.types';

const API_URL = 'https://ya-praktikum.tech/api/v2/auth';

export const AuthApi = {
  async signUp(data: AuthApiSignUpRequest) {
    const response = await axios.post<AuthApiSignUpResponse>(`${API_URL}/signup`, data, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  },

  signIn(data: AuthApiSignInRequest) {
    return axios.post(`${API_URL}/signin`, data, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  signOut() {
    return axios.post(`${API_URL}/logout`, null, {
      withCredentials: true,
    });
  },
};
