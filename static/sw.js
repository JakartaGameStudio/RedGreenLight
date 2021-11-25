const CACHE_NAME = 'my-site-cache-v1'; 
const URLS = [
  '/',
  '/main.js',
]; 


this.addEventListener("install", event => {
  console.log("install");
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