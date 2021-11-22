import { AuthApi } from 'api';
import { SignInRequestKeys } from 'api/AuthApi/AuthApi.types';
import { Form } from 'components/Form/Form';
import { FormFieldProps } from 'components/FormField/FormField.types';
import { formFieldsDictionary } from 'constans/formFieldsDictionary';
import { useForm } from 'hooks/useForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

export function FormSignIn() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const formProps = useForm<FormFieldProps>({
    fields: [
      {
        id: `FormSignIn[${SignInRequestKeys.login}]`,
        name: SignInRequestKeys.login,
        placeholder: formFieldsDictionary.login,
        type: 'text',
        required: true,
      },
      {
        id: `FormSignIn[${SignInRequestKeys.password}]`,
        name: SignInRequestKeys.password,
        placeholder: formFieldsDictionary.password,
        type: 'password',
        required: true,
      },
    ],
    onSubmit(data) {
      setLoading(true);

      return AuthApi.signIn(data)
        .then(() => {
          navigate(AppRoutes.game);
        })
        .finally(() => setLoading(false));
    },
  });

  return (
    <Form
      {...formProps}
      title="Вход"
      isLoading={isLoading}
      buttons={[
        {
          children: 'Начать игру',
          type: 'submit',
        },
        {
          children: 'Нет аккаунта?',
          mod: 'link',
          href: AppRoutes.signUp,
        },
      ]}
    />
  );
}
