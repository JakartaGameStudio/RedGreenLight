export enum ApiEndpoints {
  api = '/api',
  avatar = '/user/profile/avatar',
  changeTheme = '/user/changeThemeId',
  comment = '/comment',
  identify = '/auth/user',
  leaderboard = '/leaderboard',
  oAuthServiceId = '/oauth/yandex/service-id',
  oAuthSignIn = '/oauth/yandex',
  password = '/user/password',
  praktikumApi = 'https://ya-praktikum.tech/api/v2',
  profile = '/user/profile',
  resources = '/resources',
  signin = '/auth/signin',
  signout = '/auth/logout',
  signup = '/auth/signup',
  topic = '/topic',
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
  themeId = 'theme_id',
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
  [UserResponseKeys.themeId]: number;
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

export type Creator = {
  avatar: string;
  name: string;
  userId: number;
};

export type Topic = {
  commentsCount: string;
  creationDate: string;
  creator: Creator;
  creatorId: number;
  id: number;
  slug: string;
  title: string;
};

export type TopicCreateRequest = {
  title: string;
};

export type TopicCreateResponse = {
  id: number;
  slug: string;
};

export type Comment = {
  creationDate: string;
  creatorId: number;
  id: number;
  parentCommentId: number | null;
  text: string;
  topicId: number;
};

export type CommentReply = Comment & {
  creator: Creator;
  dislikesCount: string;
  likesCount: string;
  repliesCount: string;
  userEmotion: string;
};

export type CommentRequest = {
  parentCommentId: number | null;
  text: string;
  topicId: number;
};
