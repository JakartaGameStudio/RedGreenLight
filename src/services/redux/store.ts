import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { leaderboardApi } from './api/leaderboardApi';
import { userApi } from './api/userApi';
import { usersApi } from './api/usersApi';

export const store = configureStore({
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

setupListeners(store.dispatch);
