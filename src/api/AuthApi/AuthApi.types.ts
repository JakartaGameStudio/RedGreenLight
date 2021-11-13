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
  firstName = 'first_name',
  login = 'login',
  password = 'password',
  phone = 'phone',
  secondName = 'second_name',
}

export type AuthApiSignUpRequest = {
  [AuthApiSignUpKeys.email]: string;
  [AuthApiSignUpKeys.firstName]: string;
  [AuthApiSignUpKeys.login]: string;
  [AuthApiSignUpKeys.password]: string;
  [AuthApiSignUpKeys.phone]: string;
  [AuthApiSignUpKeys.secondName]: string;
};

export type AuthApiError = {
  error?: string;
  reason: string;
};

export type AuthApiSignUpResponse = {
  id: number;
};
