import { AuthApi } from 'api';
import { AuthApiSignInKeys } from 'api/AuthApi/AuthApi.types';
import { Form } from 'components/Form/Form';
import { FormProps } from 'components/Form/Form.types';
import { useMemo } from 'react';
import { AppRoutes } from 'types/AppRoutes';

export function FormSignIn() {
  const formProps = useMemo<Pick<FormProps, 'fields' | 'buttons'>>(
    () => ({
      fields: [
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
      ],
      buttons: [
        {
          children: 'Начать игру',
          type: 'submit',
        },
        {
          children: 'Нет аккаунта?',
          mod: 'link',
          href: AppRoutes.signUp,
        },
      ],
    }),
    [],
  );

  function onSubmit(data) {
    return AuthApi.signIn(data);
  }

  return (
    <Form title="Вход" onSubmit={onSubmit} fields={formProps.fields} buttons={formProps.buttons} />
  );
}
