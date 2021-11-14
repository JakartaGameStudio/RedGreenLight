import './App.module.scss';

import { Page500 } from 'pages/Page500/Page500';
import { PageAuth } from 'pages/PageAuth/PageAuth';
import { PageGame } from 'pages/PageGame/PageGame';
import { PageIndex } from 'pages/PageIndex/PageIndex';
import { PageSignOut } from 'pages/PageSignOut/PageSignOut';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.index} element={<PageIndex />} />
        <Route path={AppRoutes.game} element={<PageGame />} />
        <Route path={AppRoutes.signIn} element={<PageAuth />} />
        <Route path={AppRoutes.signUp} element={<PageAuth signUp={true} />} />
        <Route path={AppRoutes.signOut} element={<PageSignOut />} />
        <Route path={AppRoutes.error500} element={<Page500 />} />
      </Routes>
    </Router>
  );
}
