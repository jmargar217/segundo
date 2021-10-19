let valores = window.location.search;
const parametros = new URLSearchParams(valores);
const tabla = document.getElementById("comentarios");
let id = parametros.get("id");

//Boton de enviar comentarios
const enviar = document.getElementById("enviar");

//Obtengo los datos del post concreto

let peticion = new XMLHttpRequest();
peticion.open("GET", "http://localhost:3000/posts/" + id);
peticion.send();
peticion.addEventListener('readystatechange', () => {
    if (peticion.readyState === 4) {
        let post = JSON.parse(peticion.responseText);
        document.getElementById("titulo").innerText = post.titulo;
        document.getElementById("autor").innerText = post.autor;
        document.getElementById("contenido").innerText = post.contenido;
    }

});



//Obtengo todos los comentarios de un posts concreto(id)

let peticionDos = new XMLHttpRequest();
peticionDos.open("GET", "http://localhost:3000/posts/" + id + "/comments");
peticionDos.send();
peticionDos.addEventListener('readystatechange', () => {
    if (peticionDos.readyState === 4) {
        let comentarios = JSON.parse(peticionDos.responseText);

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

enviar.addEventListener("click", () => {
    let usuario = document.getElementById("usuario").value;
    let comentario = document.getElementById("texto").value;

    let peticionUsuarios = new XMLHttpRequest();
    peticionUsuarios.open("GET", "http://localhost:3000/users/?nombre=" + usuario);
    peticionUsuarios.send();
    peticionUsuarios.addEventListener('readystatechange', () => {
        if (peticionUsuarios.readyState === 4) {
            let usuarios = JSON.parse(peticionUsuarios.responseText);
            if (usuarios.length == 0 || usuario == "") {
                alert("El usuario introducido no esta registrado");
            } else if (usuarios[0].nombre == usuario && usuario) {
                const comentarioAdd = {
                    autor: usuario,
                    contenido: comentario,
                    postId: id
                };
                let peticionFinal = new XMLHttpRequest();
                peticionFinal.open("POST", "http://localhost:3000/comments/");
                peticionFinal.setRequestHeader('Content-type', 'application/json');
                peticionFinal.send(JSON.stringify(comentarioAdd));
                location.reload();
            }
        }

    });
})