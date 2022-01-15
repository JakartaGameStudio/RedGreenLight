const CACHE_NAME = 'my-site-cache-v1';
const URLS = [
  '/',
  '/main.js',
];
const TEAM_NAME = 'jakarta';
const RATING_FIELD_NAME = 'result';
const CURSOR = 0;
const LIMIT = 5;
const MAX_SCORE = 1000000;
const DATABASE_NAME = 'gameResult';
const LEADER_PATH = 'https://ya-praktikum.tech/api/v2/leaderboard'
const OBJECT_STORE_NAME = 'results'


this.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
      console.log("Opened cache");
      return cache.addAll(URLS);
    })
    .catch(err => {
      console.log(err);
      throw err;
    })
  );
});

this.addEventListener("sync", event => {
  if(event.tag == 'save-results') {
    event.waitUntil(syncIt());
  }
})

this.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request)
    })
  );
});

this.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
          cacheNames.map((name) => caches.delete(name))
      )
    })
  )
})

function syncIt() {
  return getDataFromDB().then((data) => {
    const body = {
      data: {
        ...data,
        result: MAX_SCORE - data.result
      },
      ratingFieldName: RATING_FIELD_NAME,
      teamName: TEAM_NAME,
    }
    return sendToServer(body)
  }).catch((err) => {
    return err;
  })
}

function getDataFromDB() {
  return new Promise(function(resolve, reject) {
    const db = indexedDB.open(DATABASE_NAME);
    db.onsuccess = function() {
        this.result.transaction(OBJECT_STORE_NAME).objectStore(OBJECT_STORE_NAME).getAll().onsuccess = function(event) {
            resolve(event.target.result[0]);
        }
    }
    db.onerror = function(err) {
        reject(err);
    }
  });
}

function sendToServer(response) {
  return fetch(LEADER_PATH, {
          method: 'POST',
          body: JSON.stringify(response),
          credentials: 'include',
          headers:{
            'Content-Type': 'application/json'
          }
  }).then((result) => {
      return result.text();
  }).catch(function(err) {
      return err;
  })
}