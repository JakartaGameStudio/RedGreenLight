import { UserResponse } from 'api/api.types';

export type ProfileAvatarProps = {
  className?: string;
  onClick?(): void;
  userData?: UserResponse;
};
