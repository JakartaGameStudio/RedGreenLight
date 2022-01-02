import { LayoutPage } from 'components/LayoutPage/LayoutPage';
import { Title } from 'components/Title/Title';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from 'services/redux';
import { AppRoutes } from 'types/AppRoutes';

export function PageSignOut() {
  const navigate = useNavigate();
  const [signOut] = authApi.useSignOutMutation();

  useEffect(() => {
    signOut().finally(() => navigate(AppRoutes.index));
  });

  return (
    <LayoutPage title="Прощай :(">
      <Title size="h2">Вы будете перенаправлены на главную старницу</Title>
    </LayoutPage>
  );
}
