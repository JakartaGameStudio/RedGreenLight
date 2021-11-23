import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';
import { App } from 'containers/App/App';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root'),
);
