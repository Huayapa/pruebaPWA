import { mostrarCard } from "./mostrarcard.js"
import { ActiveNoti } from "./notification.js"

/*
Obtengo la URL correcta para poder mostrar los productos
de la  ruta completa lo divido en partes "/"
con esto accedo al ultimo arreglo
*/
const url = window.location.pathname.split("/");
const rutaFinal =  url.at(-1);
const dominioproducts = "/products.html";

/*
SECCION DE LA CARGA DEL PRODUCTO
*/
document.addEventListener("DOMContentLoaded", () => {
  //Los productos se ejecutaran solo cuando se mueste la ruta de productos (osea la pagina que necesita esto)
  if(`/${rutaFinal}` == dominioproducts) {
    mostrarCard("products1");
    mostrarCard("products2");
    mostrarCard("products3");
    mostrarCard("products4");
  }
  ActiveNoti("btn-notification");
})

/*
SECCION DE EL BOTON MOBILE
*/

const $btnNav = document.getElementById("btn-mobile");
$btnNav.addEventListener("click", e => {
  console.log($btnNav.classList.toggle("active"));
  
})


/*
SECCION DEL SERVICE WORKER
*/

try {
  //Verificar que el navegador tenga disponible el service worker
  if(!navigator.serviceWorker) {
    throw "Su navegador no es compatible con la aplicación Movil";
  }
  /*
  Registraremos el ServiceWorker
  donde si sale el registro correctamente se enviara la respuesta
  y si no sale error "ya sea porque la conexion no es segura o no esta bien definido la ruta"
  se creara un error
  */
  navigator.serviceWorker.register("./sw.js")
  .then(respuesta => console.log("Service worker conectado:", respuesta))
  .catch(error =>  {throw `No se pudo registrar al service worker: ${error}`;});

} catch (err) {
  console.error(`Ocurrio un problema: ${err}`)
}

