import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ApiEndpoints,
  ApiMethods,
  ForumCommentRequest,
  ForumCommentResponse,
  ForumEmotionRequest,
  ForumReply,
  ForumTopic,
  ForumTopicCreateRequest,
  ForumTopicCreateResponse,
} from 'types/Api';

export const topicApi = createApi({
  reducerPath: 'topic',
  tagTypes: ['Topics', 'Comments'],
  baseQuery: fetchBaseQuery({
    baseUrl: ApiEndpoints.api,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getTopicBySlug: builder.query<ForumTopic, string>({
      query: (slug) => ({
        method: ApiMethods.get,
        url: `${ApiEndpoints.topic}/${slug}`,
      }),
      providesTags: (result) => [{ type: 'Topics', id: result.id }],
    }),
    getTopics: builder.query<{ topics: ForumTopic[] }, void>({
      query: () => ({
        method: ApiMethods.get,
        url: ApiEndpoints.topic,
      }),
      providesTags: ({ topics }) =>
        topics
          ? [
              ...topics.map(({ id }) => ({ type: 'Topics' as const, id })),
              { type: 'Topics', id: 'LIST' },
            ]
          : [{ type: 'Topics', id: 'LIST' }],
    }),
    addTopic: builder.mutation<ForumTopicCreateResponse, ForumTopicCreateRequest>({
      query: (body) => ({
        body,
        method: ApiMethods.post,
        url: ApiEndpoints.topic,
      }),
      invalidatesTags: (result) => [{ type: 'Topics', id: result.id }],
    }),
    getCommentById: builder.query<{ replies: ForumReply[] }, number>({
      query: (id) => ({
        method: ApiMethods.get,
        url: `${ApiEndpoints.comment}/${id}`,
      }),
      providesTags: ({ replies }) =>
        replies
          ? [
              ...replies.map(({ id }) => ({ type: 'Comments' as const, id })),
              { type: 'Comments', id: 'LIST' },
            ]
          : [{ type: 'Comments', id: 'LIST' }],
    }),
    addComment: builder.mutation<ForumCommentResponse, ForumCommentRequest>({
      query: (body) => ({
        body,
        method: ApiMethods.post,
        url: ApiEndpoints.comment,
      }),
      invalidatesTags: (result) => [{ type: 'Topics', id: result.topicId }],
    }),
    addLike: builder.mutation<void, ForumEmotionRequest>({
      query: ({ commentId, creatorId }) => ({
        body: {
          commentId,
          creatorId,
          emotion: 'like',
        },
        method: ApiMethods.post,
        url: ApiEndpoints.emotion,
      }),
      invalidatesTags: (result, error, args) => [
        { type: 'Comments', id: args.commentId },
        { type: 'Topics', id: args.topicId },
      ],
    }),
    addDisLike: builder.mutation<void, ForumEmotionRequest>({
      query: ({ commentId, creatorId }) => ({
        body: {
          commentId,
          creatorId,
          emotion: 'dislike',
        },
        method: ApiMethods.post,
        url: ApiEndpoints.emotion,
      }),
      invalidatesTags: (result, error, args) => [
        { type: 'Comments', id: args.commentId },
        { type: 'Topics', id: args.topicId },
      ],
    }),
  }),
});
