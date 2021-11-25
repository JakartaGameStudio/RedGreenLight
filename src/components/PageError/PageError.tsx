import { LayoutPage } from 'components/LayoutPage/LayoutPage';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

import { PageErrorProps } from './PageError.types';

export function PageError({ title, children }: PageErrorProps) {
  const [time, setTime] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (!time) {
      navigate(AppRoutes.index);
    }

    const interval = setInterval(() => setTime(time - 1), 1000);

    return function () {
      clearInterval(interval);
    };
  }, [time, navigate]);

  return (
    <LayoutPage title={title}>
      Вы будете перенаправлены на <Link to={AppRoutes.index}>главную страницу</Link> через{' '}
      <b>{time} секунд(ы)</b>
      {children}
    </LayoutPage>
  );
}
