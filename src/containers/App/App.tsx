import './App.module.scss';

import { PageIndex } from 'pages/PageIndex/PageIndex';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.index} element={<PageIndex />} />
      </Routes>
    </Router>
  );
}
