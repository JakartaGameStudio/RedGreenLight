import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiEndpoints, FindUserRequest, UserResponse, UserResponseKeys } from 'types/Api';

export const usersApi = createApi({
  reducerPath: 'users',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({
    baseUrl: ApiEndpoints.baseURL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getUserById: builder.query<UserResponse, { id: number }>({
      query: ({ id }) => ({
        method: 'GET',
        url: `/user/${id}`,
      }),
      providesTags: (result) =>
        result
          ? [
              { type: 'Users', id: result[UserResponseKeys.id] },
              { type: 'Users', id: 'LIST' },
            ]
          : [{ type: 'Users', id: 'LIST' }],
    }),
    getUsersByLogin: builder.query<UserResponse[], FindUserRequest>({
      query: (body) => ({
        body,
        method: 'POST',
        url: '/user/search',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map((item) => ({ type: 'Users', id: item[UserResponseKeys.id] } as const)),
              { type: 'Users', id: 'LIST' },
            ]
          : [{ type: 'Users', id: 'LIST' }],
    }),
  }),
});
