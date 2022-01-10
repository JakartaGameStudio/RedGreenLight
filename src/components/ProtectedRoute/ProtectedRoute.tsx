import { useIdentify } from 'hooks/useIdentify';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

export function ProtectedRoute() {
  const [userData, { isLoading }] = useIdentify();
  const { pathname } = useLocation();

  if (isLoading) {
    return null;
  }

  return userData ? (
    <Outlet />
  ) : (
    <Navigate
      to={AppRoutes.signIn}
      state={{
        from: pathname,
      }}
    />
  );
}
