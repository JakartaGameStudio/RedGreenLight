export enum UsersApiKeys {
  avatar = 'avatar',
  displayName = 'display_name',
  email = 'email',
  firstName = 'first_name',
  id = 'id',
  login = 'login',
  newPassword = 'newPassword',
  oldPassword = 'oldPassword',
  phone = 'phone',
  secondName = 'second_name',
}

export type UsersApiUser = {
  [UsersApiKeys.avatar]: string | null;
  [UsersApiKeys.displayName]: string | null;
  [UsersApiKeys.email]: string;
  [UsersApiKeys.firstName]: string;
  [UsersApiKeys.id]: number;
  [UsersApiKeys.login]: string;
  [UsersApiKeys.phone]: string;
  [UsersApiKeys.secondName]: string;
};

export type UsersApiUpdateRequest = Omit<UsersApiUser, UsersApiKeys.id>;

export type UsersApiPasswordRequest = {
  newPassword: string;
  oldPassword: string;
};

export type UsersApiAvatarRequest = FormData;

export type UsersApiSearchRequest = Pick<UsersApiUser, UsersApiKeys.login>;
