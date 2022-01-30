import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ApiEndpoints,
  ApiMethods,
  Topic,
  TopicCreateRequest,
  TopicCreateResponse,
} from 'types/Api';

export const topicApi = createApi({
  reducerPath: 'topic',
  tagTypes: ['Topic'],
  baseQuery: fetchBaseQuery({
    baseUrl: ApiEndpoints.api,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getTopicBySlug: builder.query<Topic, string>({
      query: (slug) => ({
        method: ApiMethods.get,
        url: `${ApiEndpoints.topic}/${slug}`,
      }),
      providesTags: ['Topic'],
    }),
    getTopics: builder.query<{ topics: Topic[] }, void>({
      query: () => ({
        method: ApiMethods.get,
        url: ApiEndpoints.topic,
      }),
      providesTags: ['Topic'],
    }),
    addTopic: builder.mutation<TopicCreateResponse, TopicCreateRequest>({
      query: (body) => ({
        body,
        method: ApiMethods.post,
        url: ApiEndpoints.topic,
      }),
      invalidatesTags: ['Topic'],
    }),
  }),
});
