export enum AuthApiSignInKeys {
  login = 'login',
  password = 'password',
}

export type AuthApiSignInRequest = {
  [AuthApiSignInKeys.login]: string;
  [AuthApiSignInKeys.password]: string;
};

export enum AuthApiSignUpKeys {
  email = 'email',
  first_name = 'first_name',
  login = 'login',
  password = 'password',
  phone = 'phone',
  second_name = 'second_name',
}

export type AuthApiSignUpRequest = {
  [AuthApiSignUpKeys.email]: string;
  [AuthApiSignUpKeys.first_name]: string;
  [AuthApiSignUpKeys.login]: string;
  [AuthApiSignUpKeys.password]: string;
  [AuthApiSignUpKeys.phone]: string;
  [AuthApiSignUpKeys.second_name]: string;
};

export type AuthApiError = {
  error?: string;
  reason: string;
};

export type AuthApiSignUpResponse = {
  id: number;
};
