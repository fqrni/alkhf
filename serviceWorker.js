

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("/serviceWorker.js");
}
// This code executes in its own worker or thread
this.addEventListener('fetch', function (event) {
  // it can be empty if you just want to get rid of that error
});

self.addEventListener('fetch', function (event) {
  event.respondWith(async function () {
    try {
      var res = await fetch(event.request);
      var cache = await caches.open('cache');
      cache.put(event.request.url, res.clone());
      return res;
    }
    catch (error) {
      return caches.match(event.request);
    }
  }());

});
