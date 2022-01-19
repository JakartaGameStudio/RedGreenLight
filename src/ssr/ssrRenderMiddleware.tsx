import { App } from 'containers/App/App';
import { Request, Response } from 'express';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { configureInitialStore } from 'services/redux/configureInitialStore';
import { ssrGetTemplate } from 'ssr/ssrGetTemplate';

export const ssrRenderMiddleware = (req: Request, res: Response) => {
  const location = req.url;
  const store = configureInitialStore({
    test: 'test',
  });
  const jsx = (
    <Provider store={store}>
      <StaticRouter location={location}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const reactHtml = renderToString(jsx);
  const reduxState = store.getState();

  res.send(ssrGetTemplate(reactHtml, reduxState));
};
