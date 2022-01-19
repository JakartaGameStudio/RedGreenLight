import { configureStore } from '@reduxjs/toolkit';

import { leaderboardApi } from './api/leaderboardApi';
import { userApi } from './api/userApi';
import { usersApi } from './api/usersApi';

const reducer = {
  [usersApi.reducerPath]: usersApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [leaderboardApi.reducerPath]: leaderboardApi.reducer,
};
const middleware = (getDefaultMiddleware) => {
  return getDefaultMiddleware().concat(
    usersApi.middleware,
    userApi.middleware,
    leaderboardApi.middleware,
  );
};

export function configureInitialStore(preloadedState?: unknown) {
  return configureStore({
    preloadedState,
    reducer,
    middleware,
  });
}
