import './App.module.scss';

import { PageAuth } from 'pages/PageAuth/PageAuth';
import { PageGame } from 'pages/PageGame/PageGame';
import { PageIndex } from 'pages/PageIndex/PageIndex';
import { PageProfile } from 'pages/PageProfile/PageProfile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.index} element={<PageIndex />} />
        <Route path={AppRoutes.signIn} element={<PageAuth />} />
        <Route path={AppRoutes.game} element={<PageGame />} />
        <Route path={AppRoutes.signUp} element={<PageAuth signUp={true} />} />
        <Route path={AppRoutes.profile} element={<PageProfile />} />
      </Routes>
    </Router>
  );
}
