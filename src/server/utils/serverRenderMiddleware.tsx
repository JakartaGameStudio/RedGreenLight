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
      <link rel="stylesheet" data-style="dark" href="dark.css" media="(prefers-color-scheme: dark)">
      <link rel="stylesheet" data-style="light" href="light.css" media="(prefers-color-scheme: light)">
      <title>Jakarta Games Studio | Red Green Light</title>
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
