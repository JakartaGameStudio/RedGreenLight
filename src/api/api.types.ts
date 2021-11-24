export enum UserResponseKeys {
  avatar = 'avatar',
  displayName = 'display_name',
  email = 'email',
  firstName = 'first_name',
  id = 'id',
  login = 'login',
  phone = 'phone',
  secondName = 'second_name',
}

export type UserResponse = {
  [UserResponseKeys.avatar]: string | null;
  [UserResponseKeys.displayName]: string | null;
  [UserResponseKeys.email]: string;
  [UserResponseKeys.firstName]: string;
  [UserResponseKeys.id]: number;
  [UserResponseKeys.login]: string;
  [UserResponseKeys.phone]: string;
  [UserResponseKeys.secondName]: string;
};

export type BadRequestError = {
  error?: string;
  reason: string;
};
