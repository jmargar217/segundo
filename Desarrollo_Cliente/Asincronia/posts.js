let valores = window.location.search;
const parametros = new URLSearchParams(valores);
const tabla = document.getElementById("comentarios");
let id = parametros.get("id");

//Boton de enviar comentarios

const enviar = document.getElementById("enviar");

//Obtengo los datos del post concreto

fetch("http://localhost:3000/posts/" + id)
    .then(post => {
        return post.json();
    })
    .then(postJSON => {
        document.getElementById("titulo").innerText = postJSON.titulo;
        document.getElementById("autor").innerText = postJSON.autor;
        document.getElementById("contenido").innerText = postJSON.contenido;
    })

//Obtengo todos los comentarios de un posts concreto(id)

fetch("http://localhost:3000/posts/" + id + "/comments")
    .then(comentarios => {
        return comentarios.json();

    })
    .then(comentariosJSON => {
        for (let i in comentariosJSON) {
            let fila = document.createElement("tr");
            let cuno = document.createElement("td");
            let cdos = document.createElement("td");

            let autor = document.createTextNode(comentariosJSON[i].autor);
            let contenido = document.createTextNode(comentariosJSON[i].contenido);

            cuno.appendChild(autor);
            cdos.appendChild(contenido);
            fila.appendChild(cuno);
            fila.appendChild(cdos);
            tabla.appendChild(fila);
        }
    })

enviar.addEventListener("click", () => {
    let usuario = document.getElementById("usuario").value;
    let comentario = document.getElementById("texto").value;

    fetch("http://localhost:3000/users/?nombre=" + usuario)
        .then(resultado => {
            if(resultado.ok){
                return resultado.json();
            }
        })
        .then(resultadoJSON => {
            if (resultadoJSON[0].nombre == usuario) {
                const comentarioAdd = {
                    autor: usuario,
                    contenido: comentario,
                    postId: id
                };
                const opcion = {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(comentarioAdd)
                }
                fetch("http://localhost:3000/comments/", opcion)
                    .then(function() {
                        location.reload();
                    })
            }
        })
        .catch(function() {
            alert("El usuario introducido no existe1");
        })
})