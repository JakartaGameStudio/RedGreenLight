import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import fetch from 'isomorphic-fetch';
import { ApiEndpoints, ApiMethods, GameResult } from 'types/Api';
import { LeaderboardsPlayer } from 'types/LeaderboardsPlayer.types';

const TEAM_NAME = 'jakarta';
const RATING_FIELD_NAME = 'result';
const CURSOR = 0;
const LIMIT = 5;
const MAX_SCORE = 1000000;

export const leaderboardApi = createApi({
  reducerPath: 'leaderboard',
  tagTypes: ['Leaderboard'],
  baseQuery: fetchBaseQuery({
    baseUrl: ApiEndpoints.praktikumApi,
    credentials: 'include',
    fetchFn: fetch,
  }),
  endpoints: (builder) => ({
    getLeaderboard: builder.query<LeaderboardsPlayer[], void>({
      query: () => ({
        body: {
          ratingFieldName: RATING_FIELD_NAME,
          cursor: CURSOR,
          limit: LIMIT,
        },
        method: ApiMethods.post,
        url: `${ApiEndpoints.leaderboard}/${TEAM_NAME}`,
      }),
      transformResponse: (response: Array<{ data: GameResult }>): LeaderboardsPlayer[] => {
        return response.map(({ data }, index) => ({
          ...data,
          time: MAX_SCORE - data.result,
          place: index + 1,
        }));
      },
    }),
  }),
});
