import { UsersApi } from 'api';
import { ChangePasswordRequestKeys } from 'api/UsersApi/UsersApi.types';
import { Form } from 'components/Form/Form';
import { FormProps } from 'components/Form/Form.types';
import { formFieldsDictionary } from 'constans/formFieldsDictionary';
import { useState } from 'react';
import { AppRoutes } from 'types/AppRoutes';

export function FormPassword() {
  const [fields, setFields] = useState<FormProps['fields']>([
    {
      id: `FormPassword[${[ChangePasswordRequestKeys.oldPassword]}]`,
      name: ChangePasswordRequestKeys.oldPassword,
      placeholder: formFieldsDictionary.oldPassword,
      type: 'password',
      required: true,
    },
    {
      id: `FormPassword[${[ChangePasswordRequestKeys.newPassword]}]`,
      name: ChangePasswordRequestKeys.newPassword,
      placeholder: formFieldsDictionary.newPassword,
      type: 'password',
      required: true,
    },
    {
      id: `FormPassword[confirmPassword]`,
      name: 'confirmPassword',
      placeholder: formFieldsDictionary.newPasswordConfirm,
      type: 'password',
      required: true,
    },
  ]);
  const [isLoading, setLoading] = useState(false);

  function onSubmit(data) {
    setLoading(true);

    return UsersApi.updatePassword(data).finally(() => setLoading(false));
  }

  return (
    <Form
      title="Изменить пароль"
      isLoading={isLoading}
      setFields={setFields}
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
