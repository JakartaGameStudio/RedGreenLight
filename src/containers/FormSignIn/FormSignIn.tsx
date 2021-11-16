import { AuthApi } from 'api';
import { AuthApiSignInKeys } from 'api/AuthApi/AuthApi.types';
import { Form } from 'components/Form/Form';
import { FormProps } from 'components/Form/Form.types';
import { useState } from 'react';
import { AppRoutes } from 'types/AppRoutes';

export function FormSignIn() {
  const [fields, setFields] = useState<FormProps['fields']>([
    {
      id: `FormSignIn[${AuthApiSignInKeys.login}]`,
      name: AuthApiSignInKeys.login,
      placeholder: 'Логин',
      type: 'text',
      required: true,
      value: '',
    },
    {
      id: `FormSignIn[${AuthApiSignInKeys.password}]`,
      name: AuthApiSignInKeys.password,
      placeholder: 'Пароль',
      type: 'password',
      required: true,
      value: '',
    },
  ]);

  function onChange({ name, value }) {
    setFields((prevState) =>
      prevState.map((field) => {
        return field.name === name ? { ...field, value } : field;
      }),
    );
  }

  function onSubmit(data) {
    return AuthApi.signIn(data);
  }

  return (
    <Form
      title="Вход"
      onChange={onChange}
      onSubmit={onSubmit}
      fields={fields}
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
