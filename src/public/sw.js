const CACHE_NAME = "wealthx-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/offline.html", // 👈 We’ll create this page for the game
  "/index.css",
  "/game.js", // 👈 Game file
  "/manifest.json",
  "/favicon.ico",
];

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Fetch data from cache when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Save the response clone in cache
        let responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // If fetch fails, try cache
        return caches.match(event.request).then((cachedResponse) => {
          return cachedResponse || caches.match("/offline.html");
        });
      })
  );
});

// Fetch: Show game when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match("/offline.html")) // Show game if offline
  );
});

// Activate Service Worker & delete old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
  self.clients.claim();
});
