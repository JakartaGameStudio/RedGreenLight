export enum ApiEndpoints {
  avatar = '/user/profile/avatar',
  baseURL = 'https://ya-praktikum.tech/api/v2',
  identify = '/auth/user',
  leaderboard = '/leaderboard',
  oAuth = '/oauth/yandex',
  oAuthServiceId = '/oauth/yandex/service-id',
  password = '/user/password',
  profile = '/user/profile',
  resources = '/resources',
  signin = '/auth/signin',
  signout = '/auth/logout',
  signup = '/auth/signup',
  user = '/user',
  userSearch = '/user/search',
}

export enum ApiMethods {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
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

export type GameResult = {
  login: string;
  result: number;
};

export type LeaderboardRequest = {
  cursor: 0;
  limit: 5;
  ratingFieldName: 'time';
};

export type BadRequestError = {
  reason: string;
  error?: string;
};

export type OauthSignInRequest = {
  code: string;
  redirect_uri: string;
};

export type ServiceId = {
  service_id: string;
};
