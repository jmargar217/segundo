let valores = window.location.search;
const parametros = new URLSearchParams(valores);
let id = parametros.get("id");
const enviar = document.getElementById("enviar");

enviar.addEventListener('click',()=>{
    let tituloo = document.getElementById("titulo").value;
    let contenidoo = document.getElementById("contenido").value;
    const post = {
        titulo: tituloo,
        contenido: contenidoo
    };
    
    const peticionPatch = new XMLHttpRequest();
    peticionPatch.open("PATCH", "http://localhost:3000/posts/"+id);
    peticionPatch.setRequestHeader('Content-type', 'application/json');
    peticionPatch.send(JSON.stringify(post));

    /*
    const peticionPatch = new XMLHttpRequest();
    peticionPatch.open("PUT", "http://localhost:3000/posts/"+id);
    peticionPatch.setRequestHeader('Content-type', 'application/json');
    peticionPatch.send(JSON.stringify(post));
    */

    window.location.href="listado.html";

});





