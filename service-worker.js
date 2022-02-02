self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("video-store").then(function(cache) {
      return cache.addAll([
        "/index.html",
        ".",
        "/uploading.gif",
        "/csv.html",
        "/sample.jpg",
        "/pic1.jpg",
        "/poptos.jpg",
        "/css/bootstrap.css",
        "/js/bootstrap.js",
        "/css/bootstrap.min.css",
        "/js/bootstrap.min.js",
        "/css/mdb.css",
        "/js/mdb.js",
        "/css/mdb.min.css",
        "/js/mdb.min.js",
        "/js/jquery-3.3.1.min.js",
        "/js/popper.min.js",
        "/css/style.min.css",
        "/css/style.css",
        "/images/icons/fox-icon.png",
        "/reservation.html"
      ]);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

// var CACHE_NAME = 's-cache';
// var urlsToCache = [
//         '.',
//         '/index.html',
//        '/uploading.gif',
//        '/csv.html',
//        '/sample.jpg',
//        '/pic1.jpg',
//        '/poptos.jpg',
//        '/css/bootstrap.css',
//        '/js/bootstrap.js',
//        '/css/bootstrap.min.css',
//        '/js/bootstrap.min.js',
//        '/css/mdb.css',
//        '/js/mdb.js',
//        '/css/mdb.min.css',
//        '/js/mdb.min.js',
//        '/js/jquery-3.3.1.min.js',
//        '/js/popper.min.js',
//        '/css/style.min.css',
//        '/css/style.css',
//        '/images/icons/fox-icon.png',
//        '/reservation.html'
// ];
// self.addEventListener('install', function(event) {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//     .then(function(cache) {
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//     .then(function(response) {
//       return response || fetchAndCache(event.request);
//     })
//   );
// });

// function fetchAndCache(url) {
//   return fetch(url)
//   .then(function(response) {
//     // Check if we received a valid response
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return caches.open(CACHE_NAME)
//     .then(function(cache) {
//       cache.put(url, response.clone());
//       return response;
//     });
//   })
//   .catch(function(error) {
//     console.log('Request failed:', error);
//     // You could return a custom offline 404 page here
//   });
// }
