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
