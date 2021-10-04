/*
Crea un ejemplo de utilización del objeto window, tratando de mover y redimensionar
la ventana de diferentes maneras. Prueba en 2 navegadores diferentes.
*/
const abrir = document.getElementById("abrir");
const mover = document.getElementById("mover");
const redimensionar = document.getElementById("redimensionar");
mover.addEventListener("click",moveWin);
abrir.addEventListener("click",openWin);
redimensionar.addEventListener("click",redimensiona);

function openWin(){
    miVentana = window.open('','','width=200, height=200');
}


function moveWin(){
    miVentana.moveBy(250,250);
    miVentana.focus();
}

function redimensiona(){
    miVentana.resizeBy(300,300);

}




