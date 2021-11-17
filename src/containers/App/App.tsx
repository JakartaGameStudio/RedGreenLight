import './App.module.scss';

import { Page404 } from 'pages/Page404/Page404';
import { PageAuth } from 'pages/PageAuth/PageAuth';
import { PageGame } from 'pages/PageGame/PageGame';
import { PageIndex } from 'pages/PageIndex/PageIndex';
import { PageLeaderboards } from 'pages/PageLeaderboards/PageLeaderboards';
import { PageProfile } from 'pages/PageProfile/PageProfile';
import { PageSignOut } from 'pages/PageSignOut/PageSignOut';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.index} element={<PageIndex />} />
        <Route path={AppRoutes.game} element={<PageGame />} />
        <Route path={AppRoutes.leaderBoards} element={<PageLeaderboards />} />
        <Route path={AppRoutes.signIn} element={<PageAuth />} />
        <Route path={AppRoutes.signUp} element={<PageAuth signUp={true} />} />
        <Route path={AppRoutes.signOut} element={<PageSignOut />} />
        <Route path={AppRoutes.profile} element={<PageProfile />} />
        <Route path={AppRoutes.profileEdit} element={<PageProfile type="edit" />} />
        <Route path={AppRoutes.profilePassword} element={<PageProfile type="password" />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}
