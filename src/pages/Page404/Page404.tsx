import { LayoutPage } from 'components/LayoutPage/LayoutPage';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

export function Page404() {
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
  }, [time]);

  return (
    <LayoutPage title="4🥺4 Страница не найдена">
      Вы будете перенаправлены на <Link to={AppRoutes.index}>главную страницу</Link> через{' '}
      <b>{time} секунд(ы)</b>
    </LayoutPage>
  );
}
