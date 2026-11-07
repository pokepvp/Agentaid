/* Agent ID Miner service worker: minimal pass-through so the site is
   installable. No caching — every request goes to the network, so the
   live site is never stale. */
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
