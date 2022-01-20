import { configureStore } from '@reduxjs/toolkit';

import { leaderboardApi, userApi, usersApi } from '.';
import { themesApi } from './api/themesApi';
import { userSupApi } from './api/userSupApi';

export const isServer = typeof window === 'undefined';

export function configureBaseStore() {
  const store = configureStore({
    reducer: {
      [usersApi.reducerPath]: usersApi.reducer,
      [userApi.reducerPath]: userApi.reducer,
      [leaderboardApi.reducerPath]: leaderboardApi.reducer,
      [themesApi.reducerPath]: themesApi.reducer,
      [userSupApi.reducerPath]: userSupApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(
        usersApi.middleware,
        userApi.middleware,
        leaderboardApi.middleware,
        themesApi.middleware,
        userSupApi.middleware,
      );
    },
  });

  return { store };
}
