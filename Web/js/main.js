//Js

//definimos la variable que selecciona los links del menu
var navLink = $('nav ul li a');

//ejecutamos todo esto cuando la pagina se halla cargado :D
$(document).ready(function() {

	//agregamos la clase "menu-clicked" cuando damos click en la opción
	navLink.click(function() {
		$(this).addClass('menu-clicked');
		navLink.not(this).removeClass('menu-clicked');
	});

	//hacemos que sirva el boton del menu movil
	$('#boton-menu-movil').click( function() {
		$('nav ul').slideToggle(200);
	})

});
var arriba;
    function subir() {
    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
    window.scrollBy(0, -45);
    arriba = setTimeout('subir()', 45);
    }
    else clearTimeout(arriba);
}