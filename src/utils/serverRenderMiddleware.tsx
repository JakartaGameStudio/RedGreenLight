import { App } from 'containers/App/App';
import { Request, Response } from 'express';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { configureBaseStore } from 'services/redux/rootStore';

export const serverRenderMiddleware = (req: Request, res: Response) => {
  const location = req.url;
  const { store } = configureBaseStore();
  const jsx = (
    <Provider store={store}>
      <StaticRouter location={location}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const reactHtml = renderToString(jsx);
  const reduxState = store.getState();

  res.send(getHtml(reactHtml, reduxState));
};

function getHtml(reactHtml: string, reduxState = {}) {
  return `
    <!DOCTYPE html>
    <html lang="ru">
    <head>
      <meta charset="UTF-8">
      <meta name="theme-color" content="#399C82"/>
      <meta name="msapplication-TileColor" content="#399C82"/>
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
      <link href="main.css" rel="stylesheet">
      <title>Jakarta Games Studio | Red Green Light</title>
      <style type="text/css">
        :root {
          --theme-color-content: #FFF;

          --theme-color-basic: #000;
          --theme-color-basic-middle: #696969;
          --theme-color-basic-light: #EAEAEA;

          --theme-color-primary: #0CABB0;
          --theme-color-primary-middle: #76C5C8;
          --theme-color-primary-light: #E2F2EE;

          --theme-color-secondary: #DD0B61;
          --theme-color-secondary-middle: #DE75A0;
          --theme-color-secondary-light: #FEEFF2;
        }
      </style>
    </head>
    <body>
      <div id="root">${reactHtml}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
      </script>
      <script src="/main.js"></script>
    </body>
    </html>`;
}
