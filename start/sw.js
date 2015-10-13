/* jshint worker: true */
/*globals async, caches, siteFiles, Response, fetch */

"use strict";

/* WHY IS THIS FILE AT THE ROOT? */

// Let's check that the SW script loaded
//console.log("Hello, I'm the service worker!");

// Let's start bringing in things we need
importScripts("js/async.js");

// Set up Service Worker tasks
const SWTasks = {
  deleteAllCaches: async(function* () {
    // Fill me in
  }),
  cacheSite: async(function* (ev, siteFiles) {
    // Fill me in
  }),
  respondFromCache: async(function* (request, cacheName) {
    // Fill me in
  }),
  hasCacheEntry: async(function* (request, cacheName) {
    // Fill me in
  }),
};

// Let's set up life cycle listeners ("install", "activate", "fetch")
self.addEventListener("install", async(function* (ev) {
  // Fill me in
}));

self.addEventListener("activate", async(function* (ev) {
  // Fill me in
}));

self.addEventListener("fetch", function(ev) {
  // Fill me in
});

self.addEventListener("message", async(function* (ev) {
  // Fill me in
}));


//==========
// "use strict";

// /* WHY IS THIS FILE AT THE ROOT? */

// // Let's check that the SW script loaded
// console.log("Hello, I'm the service worker!");

// // Let's start bringing in things we need
// importScripts("js/lib/async.js");
// importScripts("js/siteFiles.js");

// // Set up Service Worker tasks
// const SWTasks = {
//   deleteAllCaches: async(function* () {
//     var keys = yield caches.keys();
//     var promisesToDelete = keys.map(
//       key => caches.delete(key)
//     );
//     yield Promise.all(promisesToDelete);
//   }),
//   cacheSite: async(function* (ev, siteFiles) {
//     console.log("Trying to offline site");
//     try {
//       var cache = yield caches.open("site_cache");
//       yield cache.addAll(siteFiles);
//     } catch (err) {
//       console.error(err);
//     }
//     console.log("Done caching site files!");
//   }),
//   respondFromCache: async(function* (request, cacheName) {
//     var cache = yield caches.open(cacheName);
//     var response = yield cache.match(request);
//     // We have this, yay!
//     if (response) {
//       return response;
//     }
//     // Try to get it from the network and store it
//     try {
//       response = yield fetch(request);
//       yield cache.put(request, response.clone());
//     } catch (err) {
//       var msg = `failed to store ${request.url || request} in ${cacheName}.`;
//       console.warn(msg, err);
//       // ensure a response
//       response = new Response();
//     }
//     return response;
//   }),
//   hasCacheEntry: async(function* (request, cacheName) {
//     var cache = yield caches.open(cacheName);
//     var response = yield cache.match(request);
//     return (response) ? true : false;
//   }),
// };

// // Let's set up life cycle listeners ("install", "activate", "fetch")
// self.addEventListener("install", async(function* (ev) {
//   console.log("Handling", ev.type);
//   yield self.skipWaiting();
//   yield SWTasks.deleteAllCaches();
//   yield SWTasks.cacheSite(ev, siteFiles);
//   console.log("Successfully completed install tasks...");
// }));

// self.addEventListener("activate", async(function* (ev) {
//   console.log("Handling", ev.type);
//   yield self.clients.claim();
// }));

// self.addEventListener("fetch", function(ev) {
//   //console.log("Handling", ev.type, ev.request.url);
//   // Responding from cache
//   ev.respondWith(SWTasks.respondFromCache(ev.request, "site_cache"));
// });

// self.addEventListener("message", async(function* (ev) {
//   var name = ev.data.name || "";
//   var id = ev.data.id || "";
//   var result;
//   switch (name) {
//   case "ping":
//     result = "pong";
//     break;
//   case "isFileInCache":
//     var url = new URL(ev.data.path, self.location).href;
//     console.log("checking for", url);
//     try {
//       result = yield SWTasks.hasCacheEntry(url, "site_cache");
//     } catch (err) {
//       console.log("something went wrong", err);
//     }
//     break;
//   default:
//     console.warn("No case handler for message?", ev.data);
//   }
//   var message = {
//     name: name,
//     id: id,
//     result: result,
//   };
//   if(ev.source){
//     ev.source.postMessage(message);
//   } else {
//     var clients = yield self.clients.matchAll();
//     clients.filter(
//       client => client.focused
//     ).forEach(
//       client => client.postMessage(message)
//     );
//     console.log("We have clients:", clients.length);
//   }
// }));
