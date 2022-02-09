import { App } from 'containers/App/App';
import { Request } from 'express';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { configureInitialStore } from 'services/redux/configureInitialStore';

import { getTemplate } from './getTemplate';

export function getAppHtml(req: Request) {
  const { url } = req;
  const store = configureInitialStore();
  const jsx = (
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const reactHtml = renderToString(jsx);
  const reduxState = store.getState();

  return getTemplate(reactHtml, reduxState);
}
