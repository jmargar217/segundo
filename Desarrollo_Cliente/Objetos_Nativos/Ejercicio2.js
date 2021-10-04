/*
Realiza algún ejemplo sencillo de acceso y modificación de los diferentes atributos del objeto document.
Crea un documento html que contenga algún formulario, imágenes, anclas y enlaces y comprueba el contenido de los arrays
que contienen información sobre dichos elementos en el objeto document.

anchors
forms
images
links
location
*/

const formulario = document.forms[1].appendChild(document.createElement("input")).setAttribute("placeholder", "añadiend input");
const link = document.links[3].setAttribute("href", "https://www.marca.com");
const anclas = document.anchors[0].style.backgroundColor = "red";
const imagenes = document.images;
const localizacion = document.location;

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].style.border = "groove";
}

document.write(localizacion.pathname + "<br>" + localizacion.href + "<br>" + localizacion.origin);