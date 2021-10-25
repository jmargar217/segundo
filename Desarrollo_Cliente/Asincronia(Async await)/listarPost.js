async function obtenerPost(){
    const peticion = await fetch('http://localhost:3000/posts/') 
    if(peticion.ok){
        const posts = await peticion.json();  
        return posts;
    }
}

function cargarLista(posts) { 
    let tabla = document.getElementById("tabla");
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

            let modificar = document.createElement("input");
            modificar.setAttribute("type", "button");
            modificar.setAttribute("value", "Modificar");
            modificar.setAttribute("name", "Modificar");
            modificar.setAttribute("id", posts[i].id);

            let id = document.createTextNode(posts[i].id);
            let titulo = document.createTextNode(posts[i].titulo);
            let autor = document.createTextNode(posts[i].autor);

            cuno.appendChild(id);
            cdos.appendChild(titulo);
            ctres.appendChild(autor);
            ccuatro.appendChild(borrar);
            ccuatro.appendChild(ver);
            ccuatro.appendChild(modificar);
            fila.appendChild(cuno);
            fila.appendChild(cdos);
            fila.appendChild(ctres);
            fila.appendChild(ccuatro);
            tabla.appendChild(fila);

        }
    }
    tabla.addEventListener("click", (e) => {
        if (e.target.name == "Borrar") {
            const opcion = {
                method: "DELETE"
            }
            fetch("http://localhost:3000/posts/" + e.target.id, opcion)
                .then(function() {
                    location.reload();
                })
                .catch(function() {
                    alert("No se pudo borrar el post");
                })
        } else if (e.target.name == "Ver") {
            window.location.href = "post.html?id=" + e.target.id;

        } else if (e.target.name == "Modificar") {
            window.location.href = "modificar.html?id=" + e.target.id;
        }

    });
}

let posts = await obtenerPost();
cargarLista(posts);