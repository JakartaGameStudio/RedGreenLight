import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './reducers/authReducer/authReducer';
import { userReducer } from './reducers/userReducer/userReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer.reducer,
    users: userReducer.reducer,
  },
});
