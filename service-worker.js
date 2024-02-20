var cacheName = 'petstore-v1';
var cacheFiles = [
    'index.html',
    'product.js',
    'petstore.webmanifest',
    'image/catfood.jpeg',
    'image/catfood2.jpeg',
    'image/catfood2.jpeg',
    'image/icon-store-512.png',
    'image/kittyfood.jpeg'

];
 
self.addEventListener('install',(e) =>{
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache)=>{
            console.log ('[Service Worker] caching all the files');
            return cache.addAll(cacheFiles);

        })
    );
});