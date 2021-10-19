window.onload = cargarLista;

function cargarLista() {
    let tabla = document.getElementById("tabla");
    let peticion = new XMLHttpRequest();
    console.log("Estado inicial de la petición: " + peticion.readyState);
    peticion.open("GET", "http://localhost:3000/posts");
    console.log("Estado de la petición tras el 'open': " + peticion.readyState);
    peticion.send();
    peticion.addEventListener('load', () => {

        if (peticion.status == 200) {
            console.log("Datos recibidos:");
            let posts = JSON.parse(peticion.responseText); // Convertirmos los datos JSON a un objeto
            for (let i in posts) {
                if (i != 0) {
                    let fila = document.createElement("tr");
                    let cuno = document.createElement("td");
                    let cdos = document.createElement("td");
                    let ctres = document.createElement("td");
                    let ccuatro = document.createElement("td");

                    let borrar = document.createElement("input");
                    borrar.setAttribute("type", "button");
                    borrar.setAttribute("value", "Borrar");
                    borrar.setAttribute("name", "Borrar");
                    borrar.setAttribute("id", posts[i].id);

                    let ver = document.createElement("input");
                    ver.setAttribute("value", "Ver");
                    ver.setAttribute("type", "button");
                    ver.setAttribute("name", "Ver")
                    ver.setAttribute("href", "post.html?id=" + posts[i].id);
                    ver.setAttribute("id", posts[i].id);


                    let id = document.createTextNode(posts[i].id);
                    let titulo = document.createTextNode(posts[i].titulo);
                    let autor = document.createTextNode(posts[i].autor);

                    cuno.appendChild(id);
                    cdos.appendChild(titulo);
                    ctres.appendChild(autor);
                    ccuatro.appendChild(borrar);
                    ccuatro.appendChild(ver);
                    fila.appendChild(cuno);
                    fila.appendChild(cdos);
                    fila.appendChild(ctres);
                    fila.appendChild(ccuatro);
                    tabla.appendChild(fila);
                }

            }
        } else {
            console.log("Error " + peticion.status + " (" + peticion.statusText + ") en la petición");
        }

        tabla.addEventListener("click", (e) => {
            if (e.target.name == "Borrar") {
                let peticionDos = new XMLHttpRequest();
                peticionDos.open("DELETE", "http://localhost:3000/posts/" + e.target.id);
                peticionDos.send();

                peticionDos.addEventListener('load', function() {
                    location.reload();

                })

            } else if (e.target.name == "Ver") {
                let peticionDos = new XMLHttpRequest();
                peticionDos.open("GET", "http://localhost:3000/posts/" + e.target.id);
                peticionDos.send();
                peticionDos.addEventListener('load', function() {
                    window.location.href = "post.html?id=" + e.target.id;
                })


            }

        })

    })


}