/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');

registerRoute(
  ({ request, url }: { request: Request; url: URL }) => {
    if (request.mode !== 'navigate') {
      return true; // Cachear todas las solicitudes que no sean de navegación
    }

    if (url.pathname.startsWith('/_')) {
      return false;
    }

    if (url.pathname.match(fileExtensionRegexp)) {
      const extension = url.pathname.split('.').pop();
      // Cachear archivos MP3, JPG, PNG y HTML con CacheFirst strategy
      if (extension === 'css' ||extension === 'mp3' || extension === 'jpg' || extension === 'jpeg' || extension === 'png' || extension === 'html') {
        return true;
      }
    }

    return false;
  },
  new CacheFirst()
);

// Set up App Shell-style routing for index.html
registerRoute(
  ({ request, url }: { request: Request; url: URL }) => {
    if (request.mode !== 'navigate') {
      return false;
    }

    if (url.pathname.startsWith('/_')) {
      return false;
    }

    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }

    return true;
  },
  new StaleWhileRevalidate({
    cacheName: 'app-shell-cache'
  })
);

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'),
  // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'images2',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.jpg'),
  // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'imagesjpg2',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.js'),
  // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'scripts2',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.xz'),
  // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'visual2',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.html'),
  // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'Hypertext2',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.mp3'),
  // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'Audios2',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.css'),
  // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'Styles2',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

// Cache all files in the public directory
registerRoute(
  // Match all files in the public directory
  ({ request }) => request.url.startsWith(self.location.origin + '/public/applications/'),
  // Use CacheFirst strategy to cache files and serve them from cache if available
  new StaleWhileRevalidate({
    cacheName: 'PublicFiles2',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used files are removed.
      new ExpirationPlugin({ maxEntries: 100 }),
    ],
  })
);

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});


/* self.addEventListener('install', event => {
  console.log('Service Worker instalado');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caché abierta correctamente');
      return cache.addAll([
        // root
        '/',
        '/index.html',
        '/favicon.ico',
        '/manifest.json',
        '/logo192.png',
        '/logo512.png',
        // application assets
        '/assets/imagenes/logo-quellaveco.png',
        '/assets/imagenes/logo-eduverso.png',
        '/assets/imagenes/logo-eduverso-blanco.png',
        '/applications/images/advertencia.png',
        '/applications/images/click-izquierdo.png',
        '/applications/images/derecho.png',
        '/applications/images/paso1.png',
        '/applications/images/paso2.png',
        '/applications/images/paso3.png',
        '/applications/images/rueda.png',
        '/applications/images/tecla.png',
        '/applications/styles.css',
        '/applications/audios/area-1000-parte-a.mp3',
        '/applications/audios/area-1000-parte-b.mp3',
        '/applications/audios/area-2000-faja.mp3',
        '/applications/audios/area-2000.mp3',
        '/applications/audios/area-3000-parte-a.mp3',
        '/applications/audios/area-3000-parte-b.mp3',
        '/applications/audios/area-3000-parte-c.mp3',
        '/applications/audios/area-3300-1.mp3',
        '/applications/audios/area-3300.mp3',
        '/applications/audios/area-4000-parte-a.mp3',
        '/applications/audios/area-4000-parte-b.mp3',
        '/applications/audios/area-4000-parte-c.mp3',
        '/applications/audios/area-4000-parte-d.mp3',
        '/applications/audios/area-4000-parte-e.mp3',
        '/applications/audios/area-4000.mp3',
        '/applications/audios/area-5800.mp3',
        '/applications/audios/bienvenido-2.mp3',
        '/applications/audios/bienvenido-completo.mp3',
        '/applications/audios/bienvenido.mp3',
        // 0000General
        '/applications/0000General/0000General.html',
        '/applications/0000General/0000General.css',
        '/applications/0000General/0000General.js',
        '/applications/0000General/0000General.bin.xz',
        '/applications/0000General/0000General.bin',
        '/applications/0000General/0000General.blend',
        '/applications/0000General/0000General.gltf',
        '/applications/0000General/0000General.gltf.xz',
        '/applications/0000General/0000General.v3d.js',
        '/applications/0000General/0000General.visual_logic.js',
        // 2600Chancado01
        '/applications/2600Chancado01/2600Chancado01.html',
        '/applications/2600Chancado01/2600Chancado01.css',
        '/applications/2600Chancado01/2600Chancado01.js',
        '/applications/2600Chancado01/2600Chancado01.bin.xz',
        '/applications/2600Chancado01/2600Chancado01.bin',
        '/applications/2600Chancado01/2600Chancado01.blend',
        '/applications/2600Chancado01/2600Chancado01.gltf',
        '/applications/2600Chancado01/2600Chancado01.gltf.xz',
        '/applications/2600Chancado01/2600Chancado01.v3d.js',
        '/applications/2600Chancado01/2600Chancado01.visual_logic.js',
        // 3100molienda
        '/applications/3100molienda/3100molienda.html',
        '/applications/3100molienda/3100molienda.css',
        '/applications/3100molienda/3100molienda.js',
        '/applications/3100molienda/3100molienda.bin.xz',
        '/applications/3100molienda/3100molienda.bin',
        '/applications/3100molienda/3100molienda.blend',
        '/applications/3100molienda/3100molienda.gltf',
        '/applications/3100molienda/3100molienda.gltf.xz',
        '/applications/3100molienda/3100molienda.v3d.js',
        '/applications/3100molienda/3100molienda.visual_logic.js',
        // 3300Flotacion
        '/applications/3300Flotacion/3300Flotacion.html',
        '/applications/3300Flotacion/3300Flotacion.css',
        '/applications/3300Flotacion/3300Flotacion.js',
        '/applications/3300Flotacion/3300Flotacion.bin.xz',
        '/applications/3300Flotacion/3300Flotacion.bin',
        '/applications/3300Flotacion/3300Flotacion.blend',
        '/applications/3300Flotacion/3300Flotacion.gltf',
        '/applications/3300Flotacion/3300Flotacion.gltf.xz',
        '/applications/3300Flotacion/3300Flotacion.v3d.js',
        '/applications/3300Flotacion/3300Flotacion.visual_logic.js',
        // 4000Relaves
        '/applications/4000Relaves/4000Relaves.html',
        '/applications/4000Relaves/4000Relaves.css',
        '/applications/4000Relaves/4000Relaves.js',
        '/applications/4000Relaves/4000Relaves.bin.xz',
        '/applications/4000Relaves/4000Relaves.bin',
        '/applications/4000Relaves/4000Relaves.blend',
        '/applications/4000Relaves/4000Relaves.gltf',
        '/applications/4000Relaves/4000Relaves.gltf.xz',
        '/applications/4000Relaves/4000Relaves.v3d.js',
        '/applications/4000Relaves/4000Relaves.visual_logic.js',
        // 5000Puerto
        '/applications/5000Puerto/5000Puerto.html',
        '/applications/5000Puerto/5000Puerto.css',
        '/applications/5000Puerto/5000Puerto.js',
        '/applications/5000Puerto/5000Puerto.bin.xz',
        '/applications/5000Puerto/5000Puerto.bin',
        '/applications/5000Puerto/5000Puerto.blend',
        '/applications/5000Puerto/5000Puerto.gltf',
        '/applications/5000Puerto/5000Puerto.gltf.xz',
        '/applications/5000Puerto/5000Puerto.v3d.js',
        '/applications/5000Puerto/5000Puerto.visual_logic.js',
      ]);
    }).catch(error => {
      console.error('Error al abrir la caché:', error);
    })
  );
});

self.addEventListener('activate', event => {
  console.log('Service Worker activado');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      // Elimina las cachés antiguas (excepto la caché actual)
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName !== CACHE_NAME;
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  console.log('Solicitud fetch interceptada:', event.request.url);
  event.respondWith(handleFetch(event.request));
});

async function handleFetch(request:any) {
  try {
    // Intenta obtener la respuesta desde la caché
    const cachedResponse = await caches.match(request);

    // Si la respuesta está en caché, devuélvela
    if (cachedResponse) {
      console.log('Recurso encontrado en caché:', request.url);
      return cachedResponse;
    }

    // Si la respuesta no está en caché, haz la solicitud a la red
    const networkResponse = await fetch(request);

    // Abre el caché y almacena la respuesta de la red para futuras solicitudes
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, networkResponse.clone());
    console.log('Recurso no encontrado en caché, solicitando a la red:', request.url);
    // Devuelve la respuesta de la red
    return networkResponse;
  } catch (error) {
    // Si hay un error al recuperar recursos, puedes manejarlo aquí
    console.error('Error en la solicitud:', error);
    // Devuelve una respuesta predeterminada o una página de error personalizada si es necesario
    return new Response('Error: Recurso no disponible', { status: 500, statusText: 'Internal Server Error' });
  }
} */
