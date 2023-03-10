const alkhf = "alkhf-site", assets = ["/", "/index", "index", "/style.css", "/app.js","img" ]; 

self.addEventListener("install", a => { a.waitUntil(caches.open(alkhf).then(a => { a.addAll(assets) })) }), self.addEventListener("fetch", a => { a.respondWith(caches.match(a.request).then(t => t || fetch(a.request))) });
console.log("me")