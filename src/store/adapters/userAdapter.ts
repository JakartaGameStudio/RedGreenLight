import { createEntityAdapter } from '@reduxjs/toolkit';
import { UserResponse } from 'api/api.types';

export const userAdapter = createEntityAdapter<UserResponse>({
  selectId: (user) => user.id,
});
