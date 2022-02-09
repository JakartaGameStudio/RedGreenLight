import { GameResult } from 'types/Api';

import { storeResult } from './storeResult';

export const saveResults = (data: GameResult): void => {
  const serviceWorkerExists = navigator.serviceWorker;

  if (serviceWorkerExists) {
    return storeResultAndSendData(data);
  }
};

const storeResultAndSendData = (data: GameResult) => {
  storeResult(data);
  registerBackgroundSync();
};
const registerBackgroundSync = () => {
  navigator.serviceWorker.ready.then((registration: any) => {
    registration.sync.register('save-results');
  });
};
