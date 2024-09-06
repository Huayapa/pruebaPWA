/*
Cuando se registre el Service Worker debemos instalarlo 
y definir lo que se almacenara en la cache
*/

const cache_name = 'BurgerKingDocsMain'; //nombre de cache

const URLsToCache = [
  "./", //ruta relativa
  //Paginas principales
  "contact.html",
  "index.html",
  "products.html",
  "nosotros.html",
  "ubicacion.html",
  "manifest.json",
  //Javascripts
  "js/main.js",
  "js/mostrarcard.js",
  "js/products.js",
  "js/notification.js",
  //CSS
  "css/contact.css",
  "css/nav-footer.css",
  "css/products.css",
  "css/ubicacion.css",
  "css/reset.css",
  "css/nosotros.css",
  "css/index.css",
  //IMAGENES
  "images/logo.png",
  "images/image5.png",
  "images/image6.png",
  "images/image7.png",
  "images/image8.png",
  "images/image9.png",
]

self.addEventListener("install", (e) => {
  /*
    Abro la cache y definimos el nombre, se accede a esa cache
    y dentro de el añadimos todas las URLs que almacenara esa cache
  */
  const staticCache = caches.open(cache_name)
  .then((cache) => cache.addAll(URLsToCache))
  .catch((err) => console.error(`Error: ${err}`));  
  //indicar cuando esta en curso el proceso
  e.waitUntil(staticCache);
})

self.addEventListener("fetch", (e) => {
  /*
  Cuando esta haciendo las solicitudes verificara si existe en la cache
  Si existe traera esos datos
  Si no existe hara la peticion por internet
  */
  e.respondWith(
    caches.match(e.request).then( res => res || fetch(e.request))
  )
})
/*
PRUEBA DE LAS NOTIFIACIONES POR EL WORKER
*/

self.addEventListener('push', function(e) {
  const titulo = "Burguer king fake";
  console.log(e.data?.text());
  
  const options = {
    body: e.data?.text(),
    icon: 'images/icons/icon-72x72.png',
    badge: 'images/icons/icon-72x72.png'
  };

  e.waitUntil(
    self.registration.showNotification(titulo, options)
  );
});
