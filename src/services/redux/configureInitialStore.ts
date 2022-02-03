import { configureStore } from '@reduxjs/toolkit';

import { leaderboardApi } from './api/leaderboardApi';
import { topicApi } from './api/topicApi';
import { userApi } from './api/userApi';
import { usersApi } from './api/usersApi';

const reducer = {
  [usersApi.reducerPath]: usersApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [leaderboardApi.reducerPath]: leaderboardApi.reducer,
  [topicApi.reducerPath]: topicApi.reducer,
};
const middleware = (getDefaultMiddleware) => {
  return getDefaultMiddleware().concat(
    usersApi.middleware,
    userApi.middleware,
    leaderboardApi.middleware,
    topicApi.middleware,
  );
};

export function configureInitialStore(preloadedState?: unknown) {
  return configureStore({
    preloadedState,
    reducer,
    middleware,
  });
}
