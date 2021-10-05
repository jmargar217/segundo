/*
Revisa la documentación del objeto screen https://developer.mozilla.org/es/docs/Web/API/Screen y
busca al menos 3 ejemplos útiles que puedas realizar con este objeto.
*/

const abrir = document.getElementById("abrir");
const mover = document.getElementById("mover");
const redimensionar = document.getElementById("redimensionar");
mover.addEventListener("click",moveWin);
abrir.addEventListener("click",openWin);
redimensionar.addEventListener("click",redimensiona);



/*
Modifico el ejercicio 1 para que con el metodo screen.availWidth y screen.availHeight
me ocupe todo el espacio de la pantalla.
*/
function openWin(){
    miVentana = window.open('','','width=200, height=200');
    miVentana.resizeBy(screen.availWidth,screen.availHeight);
}


function moveWin(){
    miVentana.moveBy(250,250);
    miVentana.focus();
}

function redimensiona(){
    miVentana.resizeBy(300,300);

}
