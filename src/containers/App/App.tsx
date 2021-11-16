import './App.module.scss';

import { PageAuth } from 'pages/PageAuth/PageAuth';
import { PageForum } from 'pages/PageForum/PageForum';
import { PageGame } from 'pages/PageGame/PageGame';
import { PageIndex } from 'pages/PageIndex/PageIndex';
import { PageLeaderboards } from 'pages/PageLeaderboards/PageLeaderboards';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.index} element={<PageIndex />} />
        <Route path={AppRoutes.leaderBoards} element={<PageLeaderboards />} />
        <Route path={AppRoutes.forum} element={<PageForum />} />
        <Route path={AppRoutes.signIn} element={<PageAuth />} />
        <Route path={AppRoutes.game} element={<PageGame />} />
        <Route path={AppRoutes.signUp} element={<PageAuth signUp={true} />} />
      </Routes>
    </Router>
  );
}
