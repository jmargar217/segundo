let valores = window.location.search;
const parametros = new URLSearchParams(valores);
let id = parametros.get("id");
const enviar = document.getElementById("enviar");


fetch("http://localhost:3000/posts/" + id)
    .then(post => {
        if(post.ok){
            return post.json();
        }
        
    })
    .then(postJSON => {
        document.getElementById("titulo").setAttribute("value", postJSON.titulo);
        document.getElementById("contenido").value = postJSON.contenido;
    })

enviar.addEventListener('click', () => {
    let tituloo = document.getElementById("titulo").value;
    let contenidoo = document.getElementById("contenido").value;
    const post = {
        titulo: tituloo,
        contenido: contenidoo
    };

    const opcion = {
        method: "PATCH",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(post)
    }

    fetch("http://localhost:3000/posts/" + id, opcion)
        .then(function() {
            window.location.href = "listado.html";
        })
});