import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ApiEndpoints,
  ChangePasswordRequest,
  UserResponse,
  UserResponseKeys,
  UserUpdateRequest,
} from 'types/Api';

export const profileApi = createApi({
  reducerPath: 'profile',
  tagTypes: ['Profile'],
  baseQuery: fetchBaseQuery({
    baseUrl: ApiEndpoints.baseURL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getProfile: builder.query<UserResponse, void>({
      query: () => ({
        method: 'GET',
        url: '/auth/user',
      }),
      providesTags: (result) =>
        result
          ? [
              { type: 'Profile', id: result[UserResponseKeys.id] },
              { type: 'Profile', id: 'LIST' },
            ]
          : [{ type: 'Profile', id: 'LIST' }],
    }),
    updateProfile: builder.mutation<UserResponse, UserUpdateRequest>({
      query: (body) => ({
        body,
        method: 'PUT',
        url: '/user/profile',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: (result) =>
        result
          ? [
              { type: 'Profile', id: result[UserResponseKeys.id] },
              { type: 'Profile', id: 'LIST' },
            ]
          : [{ type: 'Profile', id: 'LIST' }],
    }),
    updateAvatar: builder.mutation<UserResponse, File>({
      query: (file) => {
        const data = new FormData();

        data.append('avatar', file);

        return {
          body: data,
          method: 'PUT',
          url: '/user/profile/avatar',
        };
      },
      invalidatesTags: (result) =>
        result
          ? [
              { type: 'Profile', id: result[UserResponseKeys.id] },
              { type: 'Profile', id: 'LIST' },
            ]
          : [{ type: 'Profile', id: 'LIST' }],
    }),
    updatePassword: builder.mutation<UserResponse, ChangePasswordRequest>({
      query: (body) => ({
        body,
        method: 'PUT',
        url: '/user/password',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});
