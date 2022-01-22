import { configureStore } from '@reduxjs/toolkit';

import { leaderboardApi } from './api/leaderboardApi';
import { themesApi } from './api/themesApi';
import { userApi } from './api/userApi';
import { usersApi } from './api/usersApi';
import { userSupApi } from './api/userSupApi';

const reducer = {
  [usersApi.reducerPath]: usersApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [leaderboardApi.reducerPath]: leaderboardApi.reducer,
  [themesApi.reducerPath]: themesApi.reducer,
  [userSupApi.reducerPath]: userSupApi.reducer,
};
const middleware = (getDefaultMiddleware) => {
  return getDefaultMiddleware().concat(
    usersApi.middleware,
    userApi.middleware,
    leaderboardApi.middleware,
    themesApi.middleware,
    userSupApi.middleware,
  );
};

export function configureInitialStore(preloadedState?: unknown) {
  return configureStore({
    preloadedState,
    reducer,
    middleware,
  });
}
