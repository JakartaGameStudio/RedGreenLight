import './App.module.scss';

import { LayoutContainer } from 'components/LayoutContainer/LayoutContainer';
import { GamePage } from 'pages/GamePage';

export function App() {
  return (
    <LayoutContainer>
      <GamePage />
    </LayoutContainer>
  );
}
