import { UsersApi } from 'api';
import { UserUpdateRequestKeys } from 'api/UsersApi/UsersApi.types';
import { Form } from 'components/Form/Form';
import { FormProps } from 'components/Form/Form.types';
import { formFieldsDictionary } from 'constans/formFieldsDictionary';
import { useState } from 'react';
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

export function FormProfile({ userData, onSubmit }: FormProfileProps) {
  const [fields, setFields] = useState<FormProps['fields']>(
    Object.entries(FIELDS).map(([key, label]) => ({
      id: `FormProfile[${key}]`,
      name: key,
      placeholder: label,
      value: userData[key],
    })),
  );
  const [isLoading, setLoading] = useState(false);

  function handlerSubmit(data) {
    setLoading(true);

    return UsersApi.updateProfile(data)
      .then(onSubmit)
      .finally(() => setLoading(false));
  }

  return (
    <Form
      title="Изменить данные"
      isLoading={isLoading}
      setFields={setFields}
      onSubmit={handlerSubmit}
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
