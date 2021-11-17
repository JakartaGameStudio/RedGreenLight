import { AuthApi } from 'api';
import { LayoutPage } from 'components/LayoutPage/LayoutPage';
import { Title } from 'components/Title/Title';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

export function PageSignOut() {
  const navigate = useNavigate();

  useEffect(() => {
    AuthApi.signOut()
      .then(() => navigate(AppRoutes.index))
      .catch((error) => {
        navigate(AppRoutes.error500, { state: { error } });
      });
  });

  return (
    <LayoutPage title="Прощай :(">
      <Title size="h2">Вы будете перенаправлены на главную старницу</Title>
    </LayoutPage>
  );
}
