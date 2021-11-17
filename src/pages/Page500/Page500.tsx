import { LayoutPage } from 'components/LayoutPage/LayoutPage';
import { useLocation } from 'react-router-dom';

export function Page500() {
  const { state } = useLocation();

  return <LayoutPage title="Произошла внутренняя ошибка 🙈">{`${state.error}`}</LayoutPage>;
}
