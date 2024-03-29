import { LayoutPage } from 'components/LayoutPage/LayoutPage';
import { Title } from 'components/Title/Title';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userApi } from 'services/redux';
import { AppRoutes } from 'types/AppRoutes';

export function PageSignOut() {
  const navigate = useNavigate();
  const [signOut] = userApi.useSignOutMutation();

  useEffect(() => {
    signOut().then(() => navigate(AppRoutes.index));
  }, [navigate, signOut]);

  return (
    <LayoutPage title="Прощай 🥺">
      <Title size="h2">Вы будете перенаправлены на главную страницу</Title>
    </LayoutPage>
  );
}
