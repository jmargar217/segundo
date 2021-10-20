let valores = window.location.search;
const parametros = new URLSearchParams(valores);
let id = parametros.get("id");
const enviar = document.getElementById("enviar");

let peticion = new XMLHttpRequest();
    console.log("Estado inicial de la petición: " + peticion.readyState);
    peticion.open("GET", "http://localhost:3000/posts/"+id);
    console.log("Estado de la petición tras el 'open': " + peticion.readyState);
    peticion.send();
    peticion.addEventListener('load', () =>{
        if (peticion.readyState === 4) {
            if(peticion.status===200){
                let post = JSON.parse(peticion.responseText);
                document.getElementById("titulo").setAttribute("value",post.titulo);
                document.getElementById("contenido").value=post.contenido;
            }
        }

    });

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





