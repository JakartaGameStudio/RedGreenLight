import { AuthApi } from 'api';
import { ApiUserKeys } from 'api/api.types';
import { Form } from 'components/Form/Form';
import { FormProps } from 'components/Form/Form.types';
import { apiFieldsDictionary } from 'constans/apiFieldsDictionary';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

export function FormSignIn() {
  const navigate = useNavigate();
  const [fields, setFields] = useState<FormProps['fields']>([
    {
      id: `FormSignIn[${ApiUserKeys.login}]`,
      name: ApiUserKeys.login,
      placeholder: apiFieldsDictionary[ApiUserKeys.login],
      type: 'text',
      required: true,
    },
    {
      id: `FormSignIn[${ApiUserKeys.password}]`,
      name: ApiUserKeys.password,
      placeholder: apiFieldsDictionary[ApiUserKeys.password],
      type: 'password',
      required: true,
    },
  ]);

  function onSubmit(data) {
    return AuthApi.signIn(data)
      .then(() => {
        navigate(AppRoutes.game);
      })
      .catch(({ response }) => {
        navigate(AppRoutes.error500, { state: { error: response.data.reason } });
      });
  }

  return (
    <Form
      title="Вход"
      setFields={setFields}
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
