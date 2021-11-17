import { UsersApi } from 'api';
import { ApiUserKeys } from 'api/api.types';
import { Form } from 'components/Form/Form';
import { FormProps } from 'components/Form/Form.types';
import { apiFieldsDictionary } from 'constans/apiFieldsDictionary';
import { useState } from 'react';
import { AppRoutes } from 'types/AppRoutes';

export function FormPassword() {
  const [fields, setFields] = useState<FormProps['fields']>([
    {
      id: `FormPassword[${[ApiUserKeys.oldPassword]}]`,
      name: ApiUserKeys.oldPassword,
      placeholder: apiFieldsDictionary[ApiUserKeys.oldPassword],
      type: 'password',
    },
    {
      id: `FormPassword[${[ApiUserKeys.newPassword]}]`,
      name: ApiUserKeys.newPassword,
      placeholder: apiFieldsDictionary[ApiUserKeys.newPassword],
      type: 'password',
    },
    {
      id: `FormPassword[confirmPassword]`,
      name: 'confirmPassword',
      placeholder: 'Новый пароль еще раз',
      type: 'password',
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
    return UsersApi.updatePassword(data);
  }

  return (
    <Form
      title="Изменить пароль"
      onChange={onChange}
      onSubmit={onSubmit}
      fields={fields}
      buttons={[
        {
          children: 'Сохранить',
          type: 'submit',
        },
        {
          mod: 'warning-light',
          children: 'Отмена',
          href: AppRoutes.profile,
        },
      ]}
    />
  );
}
