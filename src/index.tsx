import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';
import { App } from 'containers/App/App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'services/redux';
import { startServiceWorker } from 'services/startServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);

startServiceWorker();
