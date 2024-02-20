var cacheName = 'petstore-v1';
var cacheFiles = [
    'index.html',
    'products.js',
    'petstore.webmanifest',
    'images/catfood.jpeg',
    'images/catfood2.png',
    'images/icon-store-512.png',
    'images/kittyfood.png'

];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);

        })
    );
});

self.addEventListener('fetch'
    , function (e) {
        e.respondWith(
            // check if the cache has the file
            caches.match(e.request).then(function (r) {
                console.log('[Service Worker] Fetching resource: '
                    + e.request.url);
                // 'r' is the matching file if it exists in the cache
                return r
            })
        );
    });
