import './App.module.scss';

import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';
import { ProtectedRoute } from 'components/ProtectedRoute/ProtectedRoute';
import { Page404 } from 'pages/Page404/Page404';
import { PageAuth } from 'pages/PageAuth/PageAuth';
import { PageForum } from 'pages/PageForum/PageForum';
import { PageGame } from 'pages/PageGame/PageGame';
import { PageIndex } from 'pages/PageIndex/PageIndex';
import { PageLeaderBoards } from 'pages/PageLeaderBoards/PageLeaderBoards';
import { PageProfile } from 'pages/PageProfile/PageProfile';
import { PageSignOut } from 'pages/PageSignOut/PageSignOut';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

export const App = hot(() => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path={AppRoutes.index} element={<PageIndex />} />
          <Route path={AppRoutes.game} element={<PageGame />} />
          <Route path={AppRoutes.forum} element={<PageForum />} />
          <Route path={AppRoutes.signIn} element={<PageAuth />} />
          <Route path={AppRoutes.signUp} element={<PageAuth signUp={true} />} />
          <Route path={AppRoutes.signOut} element={<PageSignOut />} />
          <Route element={<ProtectedRoute />}>
            <Route path={AppRoutes.profile} element={<PageProfile />} />
            <Route path={AppRoutes.profileEdit} element={<PageProfile type="edit" />} />
            <Route path={AppRoutes.profilePassword} element={<PageProfile type="password" />} />
            <Route path={AppRoutes.leaderBoards} element={<PageLeaderBoards />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
});
