import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';
import { App } from 'containers/App/App';
import { startServiceWorker } from 'helpers/startServiceWorker';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root'),
);

startServiceWorker();
