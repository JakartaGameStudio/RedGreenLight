import { UsersApiUser } from 'api/UsersApi/UsersApi.types';

export type FormProfileProps = {
  onSubmit(userData: UsersApiUser): void;
  userData: UsersApiUser;
};
