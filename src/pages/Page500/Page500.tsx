import { LayoutPage } from 'components/LayoutPage/LayoutPage';
import { useLocation } from 'react-router-dom';

export function Page500() {
  const { state } = useLocation();
  const message = state.error.toString();

  return <LayoutPage title="Произошла внутренняя ошибка 🙈">{message}</LayoutPage>;
}
