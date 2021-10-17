window.onload = cargarLista;

function cargarLista() {
    let tabla = document.getElementById("tabla");
    let peticion = new XMLHttpRequest();
    console.log("Estado inicial de la petición: " + peticion.readyState);
    peticion.open("GET", "http://localhost:3000/posts", false);
    console.log("Estado de la petición tras el 'open': " + peticion.readyState);
    peticion.send();
    if (peticion.readyState == 4) {
        if (peticion.status == 200) {
            console.log("Datos recibidos:");
            let posts = JSON.parse(peticion.responseText); // Convertirmos los datos JSON a un objeto
            for (let i in posts) {
                if (i != 0) {
                    let fila = document.createElement("tr");
                    let cuno = document.createElement("td")
                    let cdos = document.createElement("td")
                    let ctres = document.createElement("td")
                    let ccuatro = document.createElement("td")

                    let borrar = document.createElement("input");
                    borrar.setAttribute("type", "button");
                    borrar.setAttribute("value", "Borrar");
                    let ver = document.createElement("input");
                    ver.setAttribute("type", "button");
                    ver.setAttribute("value", "Ver");


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
            if (e.target.value == "Borrar") {

            } else if (e.target.value == "Ver") {

            }
        });
    }

}