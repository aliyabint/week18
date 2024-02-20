var cacheName = 'yourguide-v1';
var cacheFiles = [
    'index2.html',
    'products.js',
    'yourguide.webmanifest',
    'images/art.png',
    'images/basketball.png',
    'images/appicon.png',
    'images/coding.png',
    'images/dance.png',
    'images/design.png',
    'images/drama.png',
    'images/header2.png',
    'images/music.png',
    'images/photo.png',
    'images/poetry.png',
    'images/sculpture.png',

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

self.addEventListener('fetch', function (e) {
        e.respondWith(
            caches.match(e.request).then(function (r) {
                // Download the file if it is not in the cache,
                return r || fetch(e.request).then(function (response) {
                    // add the new file to cache
                    return caches.open(cacheName).then(function (cache) {
                        cache.put(e.request, response.clone());
                        return response;
                    });
                });
            })
        );
    });