/* সেবাকোষ — Service Worker v2.0.0 */
const CACHE="sebakosh-v2";
const ASSETS=[
  "./index.html",
  "./admin.html",
  "./data.js",
  "./manifest.json"
];

self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});

self.addEventListener("fetch",e=>{
  /* Network first, fallback to cache */
  e.respondWith(
    fetch(e.request).then(res=>{
      const clone=res.clone();
      caches.open(CACHE).then(c=>c.put(e.request,clone));
      return res;
    }).catch(()=>caches.match(e.request))
  );
});
