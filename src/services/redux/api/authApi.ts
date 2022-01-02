import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiEndpoints, SignInRequest, SignUpRequest, SignUpResponse } from 'types/Api';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: ApiEndpoints.baseURL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation<SignUpResponse, SignUpRequest>({
      query: (body) => ({
        body,
        method: 'POST',
        url: '/auth/signup',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    signIn: builder.mutation<void, SignInRequest>({
      query: (body) => ({
        body,
        method: 'POST',
        url: '/auth/signin',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    signOut: builder.mutation<void, void>({
      query: () => ({
        method: 'POST',
        url: '/auth/logout',
      }),
    }),
  }),
});
