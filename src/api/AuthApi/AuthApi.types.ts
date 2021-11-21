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
