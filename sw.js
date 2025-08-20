const CACHE = 'fotoid-v1';
const IMG_EXT = /\.(webp|jpg|jpeg|png|avif)$/i;

self.addEventListener('install', e=>{
  self.skipWaiting();
});

self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k!==CACHE).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e=>{
  const { request } = e;
  const url = new URL(request.url);

  // Cache solo de imágenes (thumbs y full)
  if(IMG_EXT.test(url.pathname)){
    e.respondWith(staleWhileRevalidate(request));
    return;
  }
  // Deja pasar lo demás sin interceptar
});

async function staleWhileRevalidate(request){
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request, { ignoreVary:true });
  const networkPromise = fetch(request, { cache:'no-store' })
    .then(res => {
      if(res.ok) cache.put(request, res.clone());
      return res;
    }).catch(()=> cached || Response.error());
  return cached || networkPromise;
}