import { UsersApiKeys } from 'api/UsersApi/UsersApi.types';

export const apiFieldsDictionary = {
  [UsersApiKeys.firstName]: 'Имя',
  [UsersApiKeys.secondName]: 'Фамилия',
  [UsersApiKeys.displayName]: 'Никнейм',
  [UsersApiKeys.login]: 'Логин',
  [UsersApiKeys.email]: 'Email',
  [UsersApiKeys.phone]: 'Телефон',
  [UsersApiKeys.newPassword]: 'Новый пароль',
  [UsersApiKeys.oldPassword]: 'Старый пароль',
};
