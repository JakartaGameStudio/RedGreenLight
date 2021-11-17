import { AuthApi } from 'api';
import { ApiUserKeys } from 'api/api.types';
import { Form } from 'components/Form/Form';
import { FormProps } from 'components/Form/Form.types';
import { apiFieldsDictionary } from 'constans/apiFieldsDictionary';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

export function FormSignUp() {
  const navigate = useNavigate();
  const [fields, setFields] = useState<FormProps['fields']>([
    {
      id: `FormSignUp[${ApiUserKeys.firstName}]`,
      name: ApiUserKeys.firstName,
      placeholder: apiFieldsDictionary[ApiUserKeys.firstName],
    },
    {
      id: `FormSignUp[${ApiUserKeys.secondName}]`,
      name: ApiUserKeys.secondName,
      placeholder: apiFieldsDictionary[ApiUserKeys.secondName],
    },
    {
      id: `FormSignUp[${ApiUserKeys.login}]`,
      name: ApiUserKeys.login,
      placeholder: 'Логин',
      required: true,
    },
    {
      id: `FormSignUp[${ApiUserKeys.email}]`,
      name: ApiUserKeys.email,
      placeholder: apiFieldsDictionary[ApiUserKeys.email],
      type: 'email',
    },
    {
      id: `FormSignUp[${ApiUserKeys.phone}]`,
      name: ApiUserKeys.phone,
      placeholder: apiFieldsDictionary[ApiUserKeys.phone],
      type: 'tel',
      required: true,
    },
    {
      id: `FormSignUp[${ApiUserKeys.password}]`,
      name: ApiUserKeys.password,
      placeholder: apiFieldsDictionary[ApiUserKeys.password],
      type: 'password',
      required: true,
    },
  ]);

  function onSubmit(data) {
    return AuthApi.signUp(data)
      .then(() => {
        navigate(AppRoutes.game);
      })
      .catch(({ response }) => {
        navigate(AppRoutes.error500, { state: { error: response.data.reason } });
      });
  }

  return (
    <Form
      title="Присоединиться к игре"
      setFields={setFields}
      onSubmit={onSubmit}
      fields={fields}
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
