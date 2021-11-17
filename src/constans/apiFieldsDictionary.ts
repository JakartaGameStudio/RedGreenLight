import { ApiUserKeys } from 'api/api.types';

export const apiFieldsDictionary = {
  [ApiUserKeys.firstName]: 'Имя',
  [ApiUserKeys.secondName]: 'Фамилия',
  [ApiUserKeys.displayName]: 'Никнейм',
  [ApiUserKeys.login]: 'Логин',
  [ApiUserKeys.email]: 'Email',
  [ApiUserKeys.phone]: 'Телефон',
  [ApiUserKeys.password]: 'Пароль',
  [ApiUserKeys.newPassword]: 'Новый пароль',
  [ApiUserKeys.oldPassword]: 'Старый пароль',
};
