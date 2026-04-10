importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

// Pass-through fetch handler — satisfies Chrome's PWA install criteria
// without intercepting or caching any requests
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
