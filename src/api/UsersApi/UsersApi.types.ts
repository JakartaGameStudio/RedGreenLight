export enum UsersApiUserKeys {
  avatar = 'avatar',
  displayName = 'display_name',
  email = 'email',
  firstName = 'first_name',
  id = 'id',
  login = 'login',
  phone = 'phone',
  secondName = 'second_name',
}

export type UsersApiUser = {
  [UsersApiUserKeys.avatar]: string | null;
  [UsersApiUserKeys.displayName]: string | null;
  [UsersApiUserKeys.email]: string;
  [UsersApiUserKeys.firstName]: string;
  [UsersApiUserKeys.id]: number;
  [UsersApiUserKeys.login]: string;
  [UsersApiUserKeys.phone]: string;
  [UsersApiUserKeys.secondName]: string;
};

export type UsersApiUpdateRequest = Omit<UsersApiUser, UsersApiUserKeys.id>;

export type UsersApiPasswordRequest = {
  newPassword: string;
  oldPassword: string;
};

export type UsersApiAvatarRequest = FormData;

export type UsersApiSearchRequest = Pick<UsersApiUser, UsersApiUserKeys.login>;
