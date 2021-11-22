import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';
import { App } from 'containers/App/App';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root'),
);

function startServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          // eslint-disable-next-line no-console
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch((error: string) => {
          // eslint-disable-next-line no-console
          console.log('ServiceWorker registration failed: ', error);
        });
    });
  }
}

startServiceWorker();
