import { AuthApi } from 'api';
import { ApiUserKeys } from 'api/api.types';
import { Form } from 'components/Form/Form';
import { FormProps } from 'components/Form/Form.types';
import { apiFieldsDictionary } from 'constans/apiFieldsDictionary';
import { useState } from 'react';
import { AppRoutes } from 'types/AppRoutes';

export function FormSignIn() {
  const [fields, setFields] = useState<FormProps['fields']>([
    {
      id: `FormSignIn[${ApiUserKeys.login}]`,
      name: ApiUserKeys.login,
      placeholder: apiFieldsDictionary[ApiUserKeys.login],
      type: 'text',
      required: true,
      value: '',
    },
    {
      id: `FormSignIn[${ApiUserKeys.password}]`,
      name: ApiUserKeys.password,
      placeholder: apiFieldsDictionary[ApiUserKeys.password],
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
