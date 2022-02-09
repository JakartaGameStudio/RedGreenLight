import { App } from 'containers/App/App';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureInitialStore } from 'services/redux/configureInitialStore';
import { startServiceWorker } from 'services/startServiceWorker';

declare global {
  interface Window {
    __INITIAL_STATE__: unknown;
  }
}

const preloadedState = window.__INITIAL_STATE__;
const store = configureInitialStore(preloadedState);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

startServiceWorker();
