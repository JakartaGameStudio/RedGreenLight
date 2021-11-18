import { UsersApi } from 'api';
import { ApiUserKeys } from 'api/api.types';
import { Form } from 'components/Form/Form';
import { FormProps } from 'components/Form/Form.types';
import { Preloader } from 'components/Preloader/Preloader';
import { apiFieldsDictionary } from 'constans/apiFieldsDictionary';
import { useState } from 'react';
import { AppRoutes } from 'types/AppRoutes';

import { FormProfileProps } from './FormProfile.types';

const KEYS = [
  ApiUserKeys.firstName,
  ApiUserKeys.secondName,
  ApiUserKeys.displayName,
  ApiUserKeys.login,
  ApiUserKeys.phone,
  ApiUserKeys.email,
];

export function FormProfile({ userData, onSubmit }: FormProfileProps) {
  const [fields, setFields] = useState<FormProps['fields']>(
    KEYS.map((key) => ({
      id: `FormProfile[${key}]`,
      name: key,
      placeholder: apiFieldsDictionary[key],
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

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Form
      title="Изменить данные"
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
