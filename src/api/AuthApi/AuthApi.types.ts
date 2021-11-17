import { ApiUser, ApiUserKeys } from 'api/api.types';

export type AuthApiSignInRequest = Pick<ApiUser, ApiUserKeys.login | ApiUserKeys.password>;

export type AuthApiSignUpRequest = Pick<
  ApiUser,
  | ApiUserKeys.firstName
  | ApiUserKeys.secondName
  | ApiUserKeys.displayName
  | ApiUserKeys.login
  | ApiUserKeys.phone
  | ApiUserKeys.email
  | ApiUserKeys.password
>;

export type AuthApiSignUpResponse = Pick<ApiUser, ApiUserKeys.id>;
