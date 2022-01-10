import { useIdentify } from 'hooks/useIdentify';
import { Navigate, Outlet } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

export function ProtectedRoute() {
  const [userData] = useIdentify();

  return userData ? <Outlet /> : <Navigate to={AppRoutes.signIn} />;
}
