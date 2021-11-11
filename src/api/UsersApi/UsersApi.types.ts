export type UsersApiUser = {
  avatar: string | null;
  display_name: string | null;
  email: string;
  first_name: string;
  id: number;
  login: string;
  phone: string;
  second_name: string;
};

export type UsersApiRequest = {
  chatId: number;
  users: number[];
};

export type UsersApiUpdateRequest = Omit<UsersApiUser, 'id'>;

export type UsersApiPasswordRequest = {
  newPassword: string;
  oldPassword: string;
};

export type UsersApiAvatarRequest = FormData;

export type UsersApiFindRequest = Pick<UsersApiUser, 'login'>;
