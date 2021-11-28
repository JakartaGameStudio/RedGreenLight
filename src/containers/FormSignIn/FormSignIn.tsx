import { SignInRequestKeys } from 'api/AuthApi/AuthApi.types';
import { Form } from 'components/Form/Form';
import { FormFieldProps } from 'components/FormField/FormField.types';
import { formFieldsDictionary } from 'constants/formFieldsDictionary';
import { useAuth } from 'hooks/useAuth';
import { useForm } from 'hooks/useForm';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

export function FormSignIn() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [isLoading, setLoading] = useState(false);
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
  const onSubmit = useMemo(() => {
    return function (data) {
      setLoading(true);

      return signIn(data)
        .then(() => {
          navigate(AppRoutes.game);
        })
        .finally(() => setLoading(false));
    };
  }, [navigate]);
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
