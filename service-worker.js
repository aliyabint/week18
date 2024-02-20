var cacheName = 'petstore-v1';
var cacheFiles = [
    'index.html',
    'product.js',
    'petstore.webmanifest',
    'images/catfood.jpeg',
    'images/catfood2.png',
    'images/catfood2.png',
    'images/icon-store-512.png',
    'images/kittyfood.png'

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