import { UsersApi } from 'api';
import { UsersApiKeys } from 'api/UsersApi/UsersApi.types';
import { Form } from 'components/Form/Form';
import { FormProps } from 'components/Form/Form.types';
import { apiFieldsDictionary } from 'constans/apiFieldsDictionary';
import { useState } from 'react';
import { AppRoutes } from 'types/AppRoutes';

export function FormPassword() {
  const [fields, setFields] = useState<FormProps['fields']>([
    {
      id: `FormPassword[${[UsersApiKeys.oldPassword]}]`,
      name: UsersApiKeys.oldPassword,
      placeholder: apiFieldsDictionary[UsersApiKeys.oldPassword],
      type: 'password',
    },
    {
      id: `FormPassword[${[UsersApiKeys.newPassword]}]`,
      name: UsersApiKeys.newPassword,
      placeholder: apiFieldsDictionary[UsersApiKeys.newPassword],
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
