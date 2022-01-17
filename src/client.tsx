import { App } from 'containers/App/App';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureBaseStore } from 'services/redux/rootStore';
import { startServiceWorker } from 'services/startServiceWorker';

const { store } = configureBaseStore();

declare global {
  interface Window {
    __INITIAL_STATE__: any;
  }
}

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

startServiceWorker();
