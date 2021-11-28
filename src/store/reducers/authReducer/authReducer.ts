import { createSlice } from '@reduxjs/toolkit';

import { AuthReducerCases, AuthReducerState } from './authReducer.types';

export const authReducer = createSlice<AuthReducerState, AuthReducerCases>({
  name: 'auth',
  initialState: {
    id: undefined,
  },
  reducers: {
    setId(state, action) {
      state.id = action.payload.id;
    },
  },
});
