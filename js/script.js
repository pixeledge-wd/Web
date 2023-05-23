function addUser(form) {
    concole.log("hola");
}


  document.addEventListener('scroll', function() {
    var secciones = document.querySelectorAll('.seccion-animadaDer');
  
    secciones.forEach(function(seccion) {
      var posicionSeccion = seccion.getBoundingClientRect().top;
      var alturaPantalla = window.innerHeight;
  
      if (posicionSeccion < alturaPantalla) {
        seccion.classList.add('animado');
      }
    });
  });
  

  document.addEventListener('scroll', function() {
    var secciones = document.querySelectorAll('.seccion-animadaIzq');
  
    secciones.forEach(function(seccion) {
      var posicionSeccion = seccion.getBoundingClientRect().top;
      var alturaPantalla = window.innerHeight;
  
      if (posicionSeccion < alturaPantalla) {
        seccion.classList.add('animado');
      }
    });
  });
