import { LayoutPage } from 'components/LayoutPage/LayoutPage';
import { Title } from 'components/Title/Title';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

export function PageSignOut() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  useEffect(() => {
    signOut().finally(() => navigate(AppRoutes.index));
  });

  return (
    <LayoutPage title="Прощай :(">
      <Title size="h2">Вы будете перенаправлены на главную старницу</Title>
    </LayoutPage>
  );
}
