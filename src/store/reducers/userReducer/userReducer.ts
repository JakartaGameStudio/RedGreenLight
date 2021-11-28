import { createSlice } from '@reduxjs/toolkit';
import { userAdapter } from 'store/adapters/userAdapter';

export const userReducer = createSlice({
  name: 'users',
  initialState: userAdapter.getInitialState(),
  reducers: {
    addOne: userAdapter.addOne,
    setOne: userAdapter.setOne,
    updateOne: userAdapter.updateOne,
  },
});
