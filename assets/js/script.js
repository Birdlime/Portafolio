// Función para detectar si el elemento está en la vista
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Seleccionamos todos los elementos que tienen la clase 'box'
  const boxes = document.querySelectorAll('.hibrido');
  
  // Detectamos el evento de desplazamiento
  window.addEventListener('scroll', function() {
    boxes.forEach(function(hibrido) {
      if (isInViewport(hibrido)) {
        hibrido.classList.add('show-12');

        // Después de la animación inicial, cambia el margen a 'auto'
    //   setTimeout(function() {
    //     hibrido.style.marginLeft = 'auto';
    //     }, 0);  // Tiempo equivalente al de la transición CSS

      } else {
        hibrido.classList.remove('show-12'); // Vuelve a desaparecer al salir del viewport

        // Reinicia el margen cuando sale del viewport
    //   hibrido.style.marginLeft = '0';

      }
    });
  });
  

{
  const por11 = document.querySelectorAll('.por1');
  
  // Detectamos el evento de desplazamiento
  window.addEventListener('scroll', function() {
    por11.forEach(function(por1) {
      if (isInViewport(por1)) {
        por1.classList.add('por1-1');


      } else {
        por1.classList.remove('por1-1'); // Vuelve a desaparecer al salir del viewport

      }
    });
  });
}

{
    const por22 = document.querySelectorAll('.por2');
    
    // Detectamos el evento de desplazamiento
    window.addEventListener('scroll', function() {
      por22.forEach(function(por2) {
        if (isInViewport(por2)) {
          por2.classList.add('por2-2');
  
  
        } else {
          por2.classList.remove('por2-2'); // Vuelve a desaparecer al salir del viewport
  
        }
      });
    });
  }

  {
    const por33 = document.querySelectorAll('.por3');
    
    // Detectamos el evento de desplazamiento
    window.addEventListener('scroll', function() {
      por33.forEach(function(por3) {
        if (isInViewport(por3)) {
          por3.classList.add('por3-3');
  
  
        } else {
          por3.classList.remove('por3-3'); // Vuelve a desaparecer al salir del viewport
  
        }
      });
    });
  }

  {
    const por3302 = document.querySelectorAll('.por302');
    
    // Detectamos el evento de desplazamiento
    window.addEventListener('scroll', function() {
      por3302.forEach(function(por302) {
        if (isInViewport(por302)) {
          por302.classList.add('por3-3-2');
  
  
        } else {
          por302.classList.remove('por3-3-2'); // Vuelve a desaparecer al salir del viewport
  
        }
      });
    });
  }

  {
    const por3303 = document.querySelectorAll('.por303');
    
    // Detectamos el evento de desplazamiento
    window.addEventListener('scroll', function() {
      por3303.forEach(function(por303) {
        if (isInViewport(por303)) {
          por303.classList.add('por3-3-3');
  
  
        } else {
          por303.classList.remove('por3-3-3'); // Vuelve a desaparecer al salir del viewport
  
        }
      });
    });
  }