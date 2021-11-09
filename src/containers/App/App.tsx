import './App.module.scss';

import { Header } from 'components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}
