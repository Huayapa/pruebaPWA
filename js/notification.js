export function ActiveNoti(idNotificationBtn) {
  //Definirmos el boton que activara la notificaion
  const $idnotification = document.getElementById(idNotificationBtn);
  /*
  Cuando se da clic, primeramente pedira permisos para poder recibir la notificacion
  Si el permiso es permitido, mostrar una notificacion de gracias
  */
  $idnotification.addEventListener("click", e => {
    Notification.requestPermission()
    .then(permiso => {
      if(permiso == "granted") {
        new Notification("Gracias por aceptar nuestras notificaciones", {
          body: "Burguer king fake",
          icon: "images/icons/icon-72x72.png"
        })
      }
    })
  })
  /*
  Cuando el usuario sale de la pagina, ya sea a otra pagina o a otra aplicacion
  Se enviara una alerta luego de unos segundos
  */
  document.addEventListener("visibilitychange", () => {
    if(document.visibilityState === "hidden") {
      setTimeout(() => {
        new Notification("Regresa", {
          body: "No te pierdas de nuevos hamburguesas",
          icon: "images/icons/icon-72x72.png"
        })
      }, 1000)
    }
  })
}