import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import fetch from 'isomorphic-fetch';
import { ApiEndpoints, ApiMethods } from 'types/Api';

export const userSupApi = createApi({
  reducerPath: 'userSup',
  baseQuery: fetchBaseQuery({
    baseUrl: ApiEndpoints.supportURL,
    credentials: 'include',
    fetchFn: fetch,
  }),
  tagTypes: ['UserSup'],
  endpoints: (builder) => ({
    login: builder.mutation<{ status: string }, { userId: number }>({
      query: (body) => ({
        body,
        method: ApiMethods.post,
        url: ApiEndpoints.loginSup,
      }),
      invalidatesTags: ['UserSup'],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        method: ApiMethods.get,
        url: ApiEndpoints.logoutSup,
      }),
    }),
  }),
});
