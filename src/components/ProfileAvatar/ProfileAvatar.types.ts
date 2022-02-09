import { UserResponse } from 'types/Api';

export type ProfileAvatarProps = {
  className?: string;
  onClick?(): void;
  userData?: UserResponse;
};
