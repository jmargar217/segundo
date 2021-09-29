
// Número de enlaces de la página
let enlaces = document.querySelectorAll("a").length;
document.write(enlaces+"<br>");

// Dirección a la que enlaza el penúltimo enlace
let ultimoEnlace = document.querySelectorAll("a");
document.write("Dirección ultimo enlace: "+ultimoEnlace[ultimoEnlace.length-2]+"<br>");

// Numero de enlaces que enlazan a http://prueba
let nEnlaces = document.querySelectorAll('a[href="http://prueba/"]').length;
document.write(nEnlaces+"<br>");

// Número de enlaces del tercer párrafo
let aux = document.querySelectorAll("p:nth-child(3) a").length;
document.write(aux);



