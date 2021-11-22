import { UsersApi } from 'api';
import { ChangePasswordRequestKeys } from 'api/UsersApi/UsersApi.types';
import { Form } from 'components/Form/Form';
import { FormFieldProps } from 'components/FormField/FormField.types';
import { formFieldsDictionary } from 'constans/formFieldsDictionary';
import { useForm } from 'hooks/useForm';
import { useState } from 'react';
import { AppRoutes } from 'types/AppRoutes';

export function FormPassword() {
  const [isLoading, setLoading] = useState(false);
  const formProps = useForm<FormFieldProps>({
    fields: [
      {
        name: ChangePasswordRequestKeys.oldPassword,
        placeholder: formFieldsDictionary.oldPassword,
        type: 'password',
        required: true,
      },
      {
        name: ChangePasswordRequestKeys.newPassword,
        placeholder: formFieldsDictionary.newPassword,
        type: 'password',
        required: true,
      },
      {
        name: 'confirmPassword',
        placeholder: formFieldsDictionary.newPasswordConfirm,
        type: 'password',
        required: true,
      },
    ],
    onSubmit(data) {
      setLoading(true);

      return UsersApi.updatePassword(data).finally(() => setLoading(false));
    },
  });

  return (
    <Form
      {...formProps}
      title="Изменить пароль"
      isLoading={isLoading}
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
