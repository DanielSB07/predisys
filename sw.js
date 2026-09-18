// Service Worker mínimo para PrediSys — solo cachea el "app shell" estático.
// Deliberadamente NO intercepta llamadas a la API de CoinGecko ni a CDNs externos:
// esas siguen yendo directo a la red para no romper el precio en vivo ni el caché
// propio de localStorage que ya blinda el rate limit.
const CACHE_NAME = 'predisys-shell-v1';
const APP_SHELL = [
  './',
  './index.html',
  './styles.css',
  './manifest.json',
  './icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Solo maneja peticiones GET del propio origen que forman parte del app shell.
  const isAppShellRequest = req.method === 'GET' &&
    url.origin === self.location.origin &&
    APP_SHELL.some((path) => url.pathname.endsWith(path.replace('./', '')) || path === './' && url.pathname.endsWith('/'));

  if (!isAppShellRequest) return; // deja pasar todo lo demás (CoinGecko, CDNs, etc.) sin tocar

  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((res) => {
        if (res && res.ok) caches.open(CACHE_NAME).then((cache) => cache.put(req, res.clone()));
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
