import { UserResponse } from 'api/api.types';

export type FormProfileProps = {
  onSubmit(userData: UserResponse): void;
  userData: UserResponse;
};
