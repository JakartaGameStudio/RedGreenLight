import { Form } from 'components/Form/Form';
import { FormFieldProps } from 'components/FormField/FormField.types';
import { formFieldsDictionary } from 'constants/formFieldsDictionary';
import { useForm } from 'hooks/useForm';
import { useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { userApi } from 'services/redux';
import { SignUpRequestKeys } from 'types/Api';
import { AppRoutes } from 'types/AppRoutes';

import { FormSignUpProps } from './FormSignUp.types';

export function FormSignUp({ from }: FormSignUpProps) {
  const [signUp, { isLoading, isSuccess }] = userApi.useSignUpMutation();
  const fields = useMemo<FormFieldProps[]>(() => {
    return [
      {
        id: `FormSignUp[${SignUpRequestKeys.firstName}]`,
        name: SignUpRequestKeys.firstName,
        placeholder: formFieldsDictionary.firstName,
      },
      {
        id: `FormSignUp[${SignUpRequestKeys.secondName}]`,
        name: SignUpRequestKeys.secondName,
        placeholder: formFieldsDictionary.secondName,
      },
      {
        id: `FormSignUp[${SignUpRequestKeys.login}]`,
        name: SignUpRequestKeys.login,
        placeholder: formFieldsDictionary.login,
        required: true,
      },
      {
        id: `FormSignUp[${SignUpRequestKeys.email}]`,
        name: SignUpRequestKeys.email,
        placeholder: formFieldsDictionary.email,
        type: 'email',
      },
      {
        id: `FormSignUp[${SignUpRequestKeys.phone}]`,
        name: SignUpRequestKeys.phone,
        placeholder: formFieldsDictionary.phone,
        type: 'tel',
        required: true,
      },
      {
        id: `FormSignUp[${SignUpRequestKeys.password}]`,
        name: SignUpRequestKeys.password,
        placeholder: formFieldsDictionary.password,
        type: 'password',
        required: true,
      },
    ];
  }, []);
  const formProps = useForm<FormFieldProps>({ fields, onSubmit: signUp });

  if (isSuccess) {
    return <Navigate to={from || AppRoutes.game} />;
  }

  return (
    <Form
      {...formProps}
      title="Присоединиться к игре"
      isLoading={isLoading}
      buttons={[
        {
          children: 'Зарегистироваться',
          type: 'submit',
        },
        {
          children: 'Уже зарегистирован?',
          mods: ['link'],
          href: AppRoutes.signIn,
        },
      ]}
    />
  );
}
