import { configureStore } from '@reduxjs/toolkit';

import { userApi, usersApi } from '.';

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export function configureBaseStore() {
  const store = configureStore({
    reducer: {
      [usersApi.reducerPath]: usersApi.reducer,
      [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(usersApi.middleware, userApi.middleware);
    },
  });

  return { store };
}
