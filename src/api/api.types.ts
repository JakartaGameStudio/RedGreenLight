export enum ApiUserKeys {
  avatar = 'avatar',
  displayName = 'display_name',
  email = 'email',
  firstName = 'first_name',
  id = 'id',
  login = 'login',
  newPassword = 'newPassword',
  oldPassword = 'oldPassword',
  password = 'password',
  phone = 'phone',
  secondName = 'second_name',
}

export type ApiUser = {
  [ApiUserKeys.avatar]: string | null;
  [ApiUserKeys.displayName]: string | null;
  [ApiUserKeys.email]: string;
  [ApiUserKeys.firstName]: string;
  [ApiUserKeys.id]: number;
  [ApiUserKeys.login]: string;
  [ApiUserKeys.phone]: string;
  [ApiUserKeys.secondName]: string;
  [ApiUserKeys.password]: string;
  [ApiUserKeys.newPassword]: string;
  [ApiUserKeys.oldPassword]: string;
};

export type ApiError = {
  error?: string;
  reason: string;
};
