import { AuthApi } from 'api';
import { AuthApiSignUpKeys } from 'api/AuthApi/AuthApi.types';
import { Form } from 'components/Form/Form';
import { AppRoutes } from 'types/AppRoutes';

export function FormSignUp() {
  function onSubmit(data) {
    return AuthApi.signUp(data);
  }

  return (
    <Form
      title="Присоединиться к игре"
      onSubmit={onSubmit}
      fields={[
        {
          name: AuthApiSignUpKeys.first_name,
          placeholder: 'Имя',
        },
        {
          name: AuthApiSignUpKeys.second_name,
          placeholder: 'Фамилия',
        },
        {
          name: AuthApiSignUpKeys.login,
          placeholder: 'Логин',
          required: true,
        },
        {
          name: AuthApiSignUpKeys.email,
          placeholder: 'Email',
          type: 'email',
        },
        {
          name: AuthApiSignUpKeys.phone,
          placeholder: 'Телефон',
          type: 'tel',
          required: true,
        },
        {
          name: AuthApiSignUpKeys.password,
          placeholder: 'Пароль',
          type: 'password',
          required: true,
        },
      ]}
      buttons={[
        {
          children: 'Зарегистироваться',
          type: 'submit',
        },
        {
          children: 'Уже зарегистирован?',
          mod: 'link',
          href: AppRoutes.signIn,
        },
      ]}
    />
  );
}
