
/**
 * This file contains a service worker implementation for advanced usage with injectManifest strategy.
 * 
 * For projects requiring custom service worker logic, uncomment and modify this file,
 * and update the vite.config.ts to use the injectManifest strategy instead of generateSW.
 * 
 * Example:
 * 
 * VitePWA({
 *   strategies: 'injectManifest',
 *   srcDir: 'src',
 *   filename: 'service-worker.ts',
 *   // ... other options
 * })
 */

/*
import { clientsClaim } from 'workbox-core';
import { precacheAndRoute, cleanupOutdatedCaches, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute, NavigationRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate, NetworkFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';

declare const self: ServiceWorkerGlobalScope;

// Use with precache injection
// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST);

// Clean up old caches
cleanupOutdatedCaches();

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy
registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

// Cache the underlying font files with a cache-first strategy for 1 year
registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
        maxEntries: 30,
      }),
    ],
  })
);

// Cache images with a cache-first strategy
registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);

// Cache API responses with a network-first strategy
registerRoute(
  /\/api\//,
  new NetworkFirst({
    cacheName: 'api-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 10 * 60, // 10 minutes
      }),
    ],
  })
);

// Cache CSS and JavaScript with a stale-while-revalidate strategy
registerRoute(
  /\.(?:js|css)$/,
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

// This allows the web app to trigger skipWaiting via registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Any other custom service worker logic can go here
// For example, background sync, push notifications, etc.

// Claim any currently available clients once the service worker becomes active
clientsClaim();

// Set up navigation routing
const handler = createHandlerBoundToURL('/index.html');
const navigationRoute = new NavigationRoute(handler, {
  // Don't serve index.html for API routes or other specific routes
  denylist: [
    /^\/_/,
    /\/[^/?]+\.[^/]+$/,
  ],
});
registerRoute(navigationRoute);
*/
