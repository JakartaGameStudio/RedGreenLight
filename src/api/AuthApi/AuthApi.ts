import { AuthApiSignInRequest, AuthApiSignUpRequest, AuthApiSignUpResponse } from './AuthApi.types';

const API_URL = 'https://ya-praktikum.tech/api/v2/auth';

export const AuthApi = {
  async signUp(data: AuthApiSignUpRequest): Promise<AuthApiSignUpResponse> {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await response.json();
  },

  signIn(data: AuthApiSignInRequest) {
    return fetch(`${API_URL}/signin`, {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  async signOut() {
    return fetch(`${API_URL}/logout`, {
      method: 'POST',
      credentials: 'include',
    });
  },
};
