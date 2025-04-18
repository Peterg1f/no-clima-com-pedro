
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('clima-pedro-cache').then(function(cache) {
      return cache.addAll([
        './index.html',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
