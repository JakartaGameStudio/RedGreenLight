import { GameResult } from 'types/Api';

export const storeResult = (data: GameResult): void => {
  initializeDB();

  saveInDB(data);
};

const saveInDB = (data: GameResult) => {
  const gameResultDB = indexedDB.open('gameResult');

  gameResultDB.onsuccess = function () {
    const results = this.result.transaction('results', 'readwrite').objectStore('results');

    results.clear();

    results.add(data);
  };
};
const initializeDB = () => {
  const gameResultDB = indexedDB.open('gameResult');

  gameResultDB.onupgradeneeded = function () {
    const db = gameResultDB.result;

    if (!db.objectStoreNames.contains('results')) {
      db.createObjectStore('results', { autoIncrement: true });
    }
  };
};
