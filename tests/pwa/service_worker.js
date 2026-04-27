'use strict';

function handle_activate(event){
    event.waitUntil(
      caches.keys()
        .then(keys => Promise.all(
          keys.map(key => (key === id
            ? Promise.resolve()
            : caches.delete(key))
          )
        ).then(() => self.clients.claim())
    );
}

function handle_fetch(event){
    event.respondWith(
      caches.match(event.request).then(cached => cached
        || fetch(event.request).catch(() => {
            if(event.request.mode === 'navigation'){
                return caches.match('index.htm');
            }
        });
      )
    );
}

function handle_install(event){
    event.waitUntil(
      caches.open(id)
        .then(cache => cache.addAll(files))
        .then(() => self.skipWaiting())
    );
}

self.addEventListener('activate', handle_activate);
self.addEventListener('fetch', handle_fetch);
self.addEventListener('install', handle_install);

const id = 'index.htm?v1';
const files = ['.', 'index.htm', 'manifest.json', '192.png', '512.png'];
