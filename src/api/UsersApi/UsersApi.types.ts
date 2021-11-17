import { ApiUser, ApiUserKeys } from 'api/api.types';

export type UsersApiUser = Omit<ApiUser, ApiUserKeys.newPassword | ApiUserKeys.oldPassword>;

export type UsersApiUpdateRequest = Omit<UsersApiUser, ApiUserKeys.id>;

export type UsersApiPasswordRequest = Pick<
  ApiUser,
  ApiUserKeys.newPassword | ApiUserKeys.oldPassword
>;

export type UsersApiAvatarRequest = FormData;

export type UsersApiSearchRequest = Pick<ApiUser, ApiUserKeys.login>;
