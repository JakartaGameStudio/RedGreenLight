export function getTemplate(reactHtml: string, reduxState = {}) {
  return `
    <!DOCTYPE html>
    <html lang="ru">
    <head>
      <meta charset="UTF-8">
      <meta name="theme-color" content="#399C82"/>
      <meta name="msapplication-TileColor" content="#399C82"/>
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta name="color-scheme" content="light dark">
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
      <link href="/main.css" rel="stylesheet">
      <link rel="stylesheet" data-style="dark" href="/dark.css" media="(prefers-color-scheme: dark)">
      <link rel="stylesheet" data-style="light" href="/light.css" media="(prefers-color-scheme: light)">
      <title>Jakarta Games Studio | Red Green Light</title>
    </head>
    <body class="body">
      <div id="root">${reactHtml}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
      </script>
      <script src="/main.js"></script>
    </body>
    </html>`;
}
