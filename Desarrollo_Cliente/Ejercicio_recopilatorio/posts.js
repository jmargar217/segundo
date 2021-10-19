let valores = window.location.search;
const parametros = new URLSearchParams(valores);
const tabla = document.getElementById("comentarios");
let id = parametros.get("id");


//Añadir comentarios:
const usuario = document.getElementById("usuario");
const comentario = document.getElementById("contenido");
const enviar = document.getElementById("enviar");




let peticion = new XMLHttpRequest();
peticion.open("GET", "http://localhost:3000/posts/"+id);
    console.log("Estado de la petición tras el 'open': " + peticion.readyState);
    peticion.send();
    peticion.addEventListener('readystatechange', function() {
        if (peticion.readyState === 4) {
            let post = JSON.parse(peticion.responseText);
            document.getElementById("titulo").innerText = post.titulo;
            document.getElementById("autor").innerText = post.autor;
            document.getElementById("contenido").innerText = post.contenido;
        }

    });

let peticionDos = new XMLHttpRequest();
peticionDos.open("GET", "http://localhost:3000/posts/"+id+"/comments");
console.log("Estado de la petición tras el 'open': " + peticionDos.readyState);
peticionDos.send();
peticionDos.addEventListener('readystatechange', function() {
    if (peticionDos.readyState === 4) {
        let comentarios = JSON.parse(peticionDos.responseText);
        console.log(comentarios);
    
        for (let i in comentarios) {
            let fila = document.createElement("tr");
            let cuno = document.createElement("td");
            let cdos = document.createElement("td");

            let autor = document.createTextNode(comentarios[i].autor);
            let contenido = document.createTextNode(comentarios[i].contenido);

            cuno.appendChild(autor);
            cdos.appendChild(contenido);

            fila.appendChild(cuno);
            fila.appendChild(cdos);
            tabla.appendChild(fila);

        }
    }
    
 });



enviar.addEventListener("submit",(e)=>{
    e.preventDefault();

    let encontrado = false;

    let peticionTres = new XMLHttpRequest();
    peticionTres.open("GET", "http://localhost:3000/users/");
    console.log("Estado de la petición tras el 'open': " + peticionTres.readyState);
    peticionTres.send();
    peticionTres.addEventListener('readystatechange', function() {
        if (peticionTres.readyState === 4) {
            let autores = JSON.parse(peticionTres.responseText);
            while(!encontrado){
                if(autores[i].nombre == usuario){
                    
                }
            }
        }

});





