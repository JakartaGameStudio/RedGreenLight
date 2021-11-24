import { UsersApi } from 'api';
import { ChangePasswordRequestKeys } from 'api/UsersApi/UsersApi.types';
import { Form } from 'components/Form/Form';
import { FormFieldProps } from 'components/FormField/FormField.types';
import { formFieldsDictionary } from 'constants/formFieldsDictionary';
import { useForm } from 'hooks/useForm';
import { useMemo, useState } from 'react';
import { AppRoutes } from 'types/AppRoutes';

export function FormPassword() {
  const [isLoading, setLoading] = useState(false);
  const fields = useMemo<FormFieldProps[]>(() => {
    return [
      {
        id: `FormPassword[${ChangePasswordRequestKeys.oldPassword}]`,
        name: ChangePasswordRequestKeys.oldPassword,
        placeholder: formFieldsDictionary.oldPassword,
        type: 'password',
        required: true,
      },
      {
        id: `FormPassword[${ChangePasswordRequestKeys.newPassword}]`,
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
    ];
  }, []);
  const onSubmit = useMemo(() => {
    return function (data) {
      setLoading(true);

      return UsersApi.updatePassword(data).finally(() => setLoading(false));
    };
  }, []);
  const formProps = useForm<FormFieldProps>({ fields, onSubmit });

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
