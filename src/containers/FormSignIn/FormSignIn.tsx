import { AuthApi } from 'api';
import { AuthApiSignInKeys } from 'api/AuthApi/AuthApi.types';
import { Form } from 'components/Form/Form';
import { AppRoutes } from 'types/AppRoutes';

export function FormSignIn() {
  function onSubmit(data) {
    return AuthApi.signIn(data);
  }

  return (
    <Form
      title="Вход"
      onSubmit={onSubmit}
      fields={[
        {
          id: `FormSignIn[${AuthApiSignInKeys.login}]`,
          name: AuthApiSignInKeys.login,
          placeholder: 'Логин',
          type: 'text',
          required: true,
        },
        {
          id: `FormSignIn[${AuthApiSignInKeys.password}]`,
          name: AuthApiSignInKeys.password,
          placeholder: 'Пароль',
          type: 'password',
          required: true,
        },
      ]}
      buttons={[
        {
          children: 'Начать игру',
          type: 'submit',
        },
        {
          children: 'Нет аккаунта?',
          mod: 'link',
          href: AppRoutes.signUp,
        },
      ]}
    />
  );
}
