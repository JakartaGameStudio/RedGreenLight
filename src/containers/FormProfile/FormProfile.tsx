import { UsersApi } from 'api';
import { UserUpdateRequestKeys } from 'api/UsersApi/UsersApi.types';
import { Form } from 'components/Form/Form';
import { FormFieldProps } from 'components/FormField/FormField.types';
import { formFieldsDictionary } from 'constants/formFieldsDictionary';
import { useForm } from 'hooks/useForm';
import { useMemo, useState } from 'react';
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
  const fields = useMemo<FormFieldProps[]>(() => {
    return Object.entries(FIELDS).map(([key, label]) => ({
      id: `FormProfile[${key}]`,
      name: key,
      placeholder: label,
      value: userData[key],
    }));
  }, [userData]);
  const onSubmit = useMemo(() => {
    return function (data) {
      setLoading(true);

      return UsersApi.updateProfile(data)
        .then(() => {
          navigate(AppRoutes.profile);
        })
        .finally(() => setLoading(false));
    };
  }, [navigate]);
  const formProps = useForm<FormFieldProps>({ fields, onSubmit });
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
