import { UsersApiUser } from 'api/UsersApi/UsersApi.types';

export type ProfileAvatarProps = {
  className?: string;
  onClick?(): void;
  userData: UsersApiUser;
};
