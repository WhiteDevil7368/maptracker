// DIGIM PWA Basic Service Worker Background Thread
const CACHE_NAME = 'digim-tracker-v1';

self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    // Allows online map engines to function seamlessly bypassing cache locks
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
