import { UsersApi } from 'api';
import { UserUpdateRequestKeys } from 'api/UsersApi/UsersApi.types';
import { Form } from 'components/Form/Form';
import { FormFieldProps } from 'components/FormField/FormField.types';
import { formFieldsDictionary } from 'constans/formFieldsDictionary';
import { useForm } from 'hooks/useForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

import { FormProfileProps } from './FormProfile.types';

const FIELDS = {
  [UserUpdateRequestKeys.firstName]: formFieldsDictionary.firstName,
  [UserUpdateRequestKeys.secondName]: formFieldsDictionary.secondName,
  [UserUpdateRequestKeys.displayName]: formFieldsDictionary.displayName,
  [UserUpdateRequestKeys.login]: formFieldsDictionary.login,
  [UserUpdateRequestKeys.phone]: formFieldsDictionary.phone,
  [UserUpdateRequestKeys.email]: formFieldsDictionary.email,
};

export function FormProfile({ userData }: FormProfileProps) {
  const navigate = useNavigate();
  const formProps = useForm<FormFieldProps>({
    fields: Object.entries(FIELDS).map(([key, label]) => ({
      id: `FormProfile[${key}]`,
      name: key,
      placeholder: label,
      value: userData[key],
    })),
    onSubmit(data) {
      setLoading(true);

      return UsersApi.updateProfile(data)
        .then(() => {
          navigate(AppRoutes.profile);
        })
        .finally(() => setLoading(false));
    },
  });
  const [isLoading, setLoading] = useState(false);

  return (
    <Form
      {...formProps}
      title="Изменить данные"
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