import './App.module.scss';

import { PageAuth } from 'pages/PageAuth/PageAuth';
import { PageIndex } from 'pages/PageIndex/PageIndex';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.index} element={<PageIndex />} />
        <Route path={AppRoutes.signIn} element={<PageAuth />} />
        <Route path={AppRoutes.signUp} element={<PageAuth signUp={true} />} />
      </Routes>
    </Router>
  );
}
