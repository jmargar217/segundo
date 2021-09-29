// Crear el fichero Ejercicio2.js con el código necesario para que cuando se pinche sobre el enlace de la página Ejercicio2.html
// se muestre completo el contenido de texto. Además, el enlace debe dejar de mostrarse después de pulsarlo por primera vez.

document.getElementById("enlace").addEventListener('click', mostrar);

function mostrar() {
    document.getElementById("adicional").classList.add("visible");
    document.getElementById("enlace").classList.add("oculto");
}