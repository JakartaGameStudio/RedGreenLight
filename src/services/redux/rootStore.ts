import { configureStore } from '@reduxjs/toolkit';

import { leaderboardApi, userApi, usersApi } from '.';

export const isServer = typeof window === 'undefined';

export function configureBaseStore() {
  const store = configureStore({
    reducer: {
      [usersApi.reducerPath]: usersApi.reducer,
      [userApi.reducerPath]: userApi.reducer,
      [leaderboardApi.reducerPath]: leaderboardApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(
        usersApi.middleware,
        userApi.middleware,
        leaderboardApi.middleware,
      );
    },
  });

  return { store };
}
