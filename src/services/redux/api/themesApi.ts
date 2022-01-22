import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import fetch from 'isomorphic-fetch';
import { ApiEndpoints, ApiMethods } from 'types/Api';

export const themesApi = createApi({
  reducerPath: 'theme',
  tagTypes: ['Theme'],
  baseQuery: fetchBaseQuery({
    baseUrl: ApiEndpoints.supportURL,
    credentials: 'include',
    fetchFn: fetch,
  }),
  endpoints: (builder) => ({
    get: builder.query<number, void>({
      query: () => ({
        method: ApiMethods.get,
        url: ApiEndpoints.theme,
      }),
      transformResponse: (response: { themeId: number; userId: number }) => response.themeId,
      providesTags: ['Theme'],
    }),

    change: builder.mutation<void, { themeId: number }>({
      query: (body) => ({
        body,
        method: ApiMethods.put,
        url: ApiEndpoints.changeTheme,
      }),
      invalidatesTags: ['Theme'],
    }),
  }),
});
