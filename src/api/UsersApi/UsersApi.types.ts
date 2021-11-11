export type UsersApiUser = {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  phone: string;
  display_name: string | null;
  avatar: string | null;
};

export type UsersApiRequest = {
  users: number[];
  chatId: number;
};

export type UsersApiUpdateRequest = Omit<UsersApiUser, 'id'>;

export type UsersApiPasswordRequest = {
  oldPassword: string;
  newPassword: string;
};

export type UsersApiAvatarRequest = FormData;

export type UsersApiFindRequest = Pick<UsersApiUser, 'login'>;
