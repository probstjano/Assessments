
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('test-app-cache').then(function(cache) {
      return cache.addAll([
        'index.html',
        'demmi.html',
        'tinetti.html',
        'isi.html'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
