import { Form } from 'components/Form/Form';
import { FormFieldProps } from 'components/FormField/FormField.types';
import { formFieldsDictionary } from 'constants/formFieldsDictionary';
import { useForm } from 'hooks/useForm';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from 'services/redux';
import { SignInRequestKeys } from 'types/Api';
import { AppRoutes } from 'types/AppRoutes';

export function FormSignIn() {
  const navigate = useNavigate();
  const [signIn, { isLoading }] = authApi.useSignInMutation();
  const fields = useMemo<FormFieldProps[]>(() => {
    return [
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
    ];
  }, []);
  const onSubmit = function (data) {
    return signIn(data).then(() => {
      navigate(AppRoutes.game);
    });
  };
  const formProps = useForm<FormFieldProps>({ fields, onSubmit });

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
