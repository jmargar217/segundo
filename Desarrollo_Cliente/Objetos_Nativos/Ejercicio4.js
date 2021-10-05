/*
A partir de la página proporcionada en las transparencias
https://developer.mozilla.org/es/docs/Web/API/Navigator indica y prueba algunos métodos
útiles del objeto navigator.
*/


/*
Devuelve el nombre del fabricante del navegador
*/
document.write(navigator.vendor+"<br>");

/*
Código del lenguaje del navegador
*/
document.write(navigator.language+"<br>");


/*
Saco todos los plugins que tiene instalado el navegador
*/
const plugins = navigator.plugins;

for(let i=0; i<plugins.length;i++){
    document.write(plugins[i].name+"<br>");
}

/*
Devuelve si el navegador tiene habilitado las cookies
*/
document.write(navigator.cookieEnabled);
