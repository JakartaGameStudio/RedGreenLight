export enum ApiEndpoints {
  baseURL = 'https://ya-praktikum.tech/api/v2',
  resources = 'https://ya-praktikum.tech/api/v2/resources',
}

export enum UserUpdateRequestKeys {
  displayName = 'display_name',
  email = 'email',
  firstName = 'first_name',
  login = 'login',
  phone = 'phone',
  secondName = 'second_name',
}

export enum ChangePasswordRequestKeys {
  newPassword = 'newPassword',
  oldPassword = 'oldPassword',
}

export enum FindUserRequestKeys {
  login = 'login',
}

export enum SignInRequestKeys {
  login = 'login',
  password = 'password',
}

export enum SignUpRequestKeys {
  displayName = 'display_name',
  email = 'email',
  firstName = 'first_name',
  login = 'login',
  password = 'password',
  phone = 'phone',
  secondName = 'second_name',
}

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

export type SignInRequest = {
  [SignInRequestKeys.login]: string;
  [SignInRequestKeys.password]: string;
};

export type SignUpRequest = {
  [SignUpRequestKeys.firstName]: string;
  [SignUpRequestKeys.secondName]: string;
  [SignUpRequestKeys.displayName]: string;
  [SignUpRequestKeys.login]: string;
  [SignUpRequestKeys.phone]: string;
  [SignUpRequestKeys.email]: string;
  [SignUpRequestKeys.password]: string;
};

export type SignUpResponse = {
  id: number;
};

export type UserUpdateRequest = {
  [UserUpdateRequestKeys.firstName]: string;
  [UserUpdateRequestKeys.secondName]: string;
  [UserUpdateRequestKeys.displayName]: string;
  [UserUpdateRequestKeys.login]: string;
  [UserUpdateRequestKeys.email]: string;
  [UserUpdateRequestKeys.phone]: string;
};

export type ChangePasswordRequest = {
  [ChangePasswordRequestKeys.newPassword]: string;
  [ChangePasswordRequestKeys.oldPassword]: string;
};

export type FindUserRequest = {
  [FindUserRequestKeys.login]: string;
};

export type BadRequestError = {
  error?: string;
  reason: string;
};
