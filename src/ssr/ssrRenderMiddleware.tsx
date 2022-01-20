import axios from 'axios';
import { App } from 'containers/App/App';
import { Request, Response } from 'express';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { configureInitialStore } from 'services/redux/configureInitialStore';
import { ssrGetTemplate } from 'ssr/ssrGetTemplate';
import { ApiEndpoints } from 'types/Api';
import { AppRoutes } from 'types/AppRoutes';

export async function ssrRenderMiddleware(req: Request, res: Response) {
  const { url, query } = req;
  const store = configureInitialStore();

  if (query.code) {
    try {
      await axios.post(`${ApiEndpoints.baseURL}${ApiEndpoints.oAuth}`, {
        code: req.query.code,
        redirect_uri: AppRoutes.oauthRedirectUri,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  const jsx = (
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const reactHtml = renderToString(jsx);
  const reduxState = store.getState();

  res.send(ssrGetTemplate(reactHtml, reduxState));
}
