swal("¡Bienvenido!", "......A la derecha encontraras un icono \"paint🎨\" para personalizar la vista de la pagina a tus gustos!")
.then((value) => {
    swal(`¡Gracias!`);
  });
  window.onunload=function(){swal('Vuelva en otro momento');}
  //derechos reservados al copiar
  document.body.oncopy = function() {
swal('Todos los derechos reservados. Dorilexs ©️ 2021',  {
    icon: "error",
  });
    return false;
};