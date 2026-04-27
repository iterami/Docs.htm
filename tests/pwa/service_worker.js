'use strict';

function handle_activate(event){
    console.log('activate', event);
}

function handle_fetch(event){
    console.log('fetch', event);
}

function handle_install(event){
    console.log('install', event);
}

self.addEventListener('activate', handle_activate);
self.addEventListener('fetch', handle_fetch);
self.addEventListener('install', handle_install);
