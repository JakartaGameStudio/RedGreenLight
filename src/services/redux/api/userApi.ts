import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ApiEndpoints,
  ApiMethods,
  ChangePasswordRequest,
  SignInRequest,
  SignUpRequest,
  SignUpResponse,
  UserResponse,
  UserUpdateRequest,
} from 'types/Api';

export const userApi = createApi({
  reducerPath: 'user',
  tagTypes: ['Profile'],
  baseQuery: fetchBaseQuery({
    baseUrl: ApiEndpoints.baseURL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation<SignUpResponse, SignUpRequest>({
      query: (body) => ({
        body,
        method: ApiMethods.post,
        url: ApiEndpoints.signup,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['Profile'],
    }),
    signIn: builder.mutation<string, SignInRequest>({
      query: (body) => ({
        body,
        method: ApiMethods.post,
        url: ApiEndpoints.signin,
        responseHandler: (response) => {
          if (response.ok) {
            return response.text();
          }

          return response.json();
        },
      }),
      invalidatesTags: ['Profile'],
    }),
    signOut: builder.mutation<string, void>({
      query: () => ({
        method: 'POST',
        url: ApiEndpoints.signout,
        responseHandler: (response) => {
          if (response.ok) {
            return response.text();
          }

          return response.json();
        },
      }),
      invalidatesTags: ['Profile'],
    }),
    getUser: builder.query<UserResponse, void>({
      query: () => ({
        method: ApiMethods.get,
        url: ApiEndpoints.identify,
      }),
      providesTags: ['Profile'],
    }),
    updateProfile: builder.mutation<UserResponse, UserUpdateRequest>({
      query: (body) => ({
        body,
        method: ApiMethods.put,
        url: ApiEndpoints.profile,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['Profile'],
    }),
    updateAvatar: builder.mutation<UserResponse, File>({
      query: (file) => {
        const data = new FormData();

        data.append('avatar', file);

        return {
          body: data,
          method: ApiMethods.put,
          url: ApiEndpoints.avatar,
        };
      },
      invalidatesTags: ['Profile'],
    }),
    updatePassword: builder.mutation<UserResponse, ChangePasswordRequest>({
      query: (body) => ({
        body,
        method: ApiMethods.put,
        url: ApiEndpoints.password,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});
