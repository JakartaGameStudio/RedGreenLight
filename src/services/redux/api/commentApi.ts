import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiEndpoints, ApiMethods, CommentReply, CommentRequest } from 'types/Api';

export const commentApi = createApi({
  reducerPath: 'comment',
  tagTypes: ['Comment'],
  baseQuery: fetchBaseQuery({
    baseUrl: ApiEndpoints.api,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getCommentsById: builder.query<{ replies: CommentReply[] }, number>({
      query: (topicId) => ({
        method: ApiMethods.get,
        url: `${ApiEndpoints.comment}/${topicId}`,
      }),
      providesTags: ['Comment'],
    }),
    addComment: builder.mutation<Comment, CommentRequest>({
      query: (body) => ({
        body,
        method: ApiMethods.post,
        url: ApiEndpoints.comment,
      }),
      invalidatesTags: ['Comment'],
    }),
  }),
});
