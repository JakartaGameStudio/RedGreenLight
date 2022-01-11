import { App } from 'containers/App/App';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';
import { configureBaseStore } from 'services/redux/rootStore';

const { store, history } = configureBaseStore(window.__INITIAL_STATE__);

declare global {
  interface Window {
    __INITIAL_STATE__: any;
  }
}

hydrate(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>,
  document.getElementById('root'),
);
