import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';

import { userApi, usersApi } from '.';

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export function configureBaseStore(url = '/') {
  const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: isServer ? createMemoryHistory({ initialEntries: [url] }) : createBrowserHistory(),
  });
  const store = configureStore({
    reducer: {
      [usersApi.reducerPath]: usersApi.reducer,
      [userApi.reducerPath]: userApi.reducer,
      router: routerReducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(
        usersApi.middleware,
        userApi.middleware,
        routerMiddleware,
      );
    },
  });
  const history = createReduxHistory(store);

  return { store, history };
}
