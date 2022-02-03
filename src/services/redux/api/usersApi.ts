import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiEndpoints, ApiMethods, ApiUrl, FindUserRequest, UserResponse } from 'types/Api';

export const usersApi = createApi({
  reducerPath: 'users',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({
    baseUrl: ApiUrl.praktikum,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getUserById: builder.query<UserResponse, { id: number }>({
      query: ({ id }) => ({
        method: ApiMethods.get,
        url: `${ApiEndpoints.user}/${id}`,
      }),
    }),
    getUsersByLogin: builder.query<UserResponse[], FindUserRequest>({
      query: (body) => ({
        body,
        method: ApiMethods.post,
        url: ApiEndpoints.userSearch,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});
