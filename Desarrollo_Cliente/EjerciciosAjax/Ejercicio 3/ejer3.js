/*
El script del servidor se llama compruebaDisponibilidadJSON.php y el parámetro que contiene el
nombre se llama login.
La respuesta del servidor es un objeto JSON con la siguiente estructura:
El nombre de usuario está libre:
{ disponible: "si" }
El nombre de usuario está ocupado:
{ disponible: "no", alternativas: ["...", "...", ..., "..."] }
*/

const boton = document.getElementById("comprobar");
boton.addEventListener("click", () => {
    let datosFormulario = new FormData(document.getElementById("formulario"));
    const opcion = {
        method: "POST",
        body: datosFormulario
    }

    fetch('https:compruebaDisponibilidadJSON', opcion)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(json => {
            if (json.disponible == "si") {
                document.getElementById("disponibilidad").innerText = "El usuario si está disponible";
            } else if (json.disponible == "no") {
                let lista = document.createElement("ul");
                let div = document.getElementById("disponibilidad");
                document.getElementById("disponibilidad").innerText = "El usuario no está disponible";

                for (let i = 0; i < json.alternativas.length; i++) {
                    let fila = document.createElement("li");
                    let enlace = document.createElement("a");
                    enlace.setAttribute("name", json.alternativas[i]);
                    enlace.setAttribute("href", "#");
                    enlace.textContent = json.alternativas[i];
                    enlace.addEventListener("click", (e) => {
                        document.getElementById("login").innerText = e.target.name;
                    });

                    fila.appendChild(enlace);
                    lista.appendChild(fila);
                    div.appendChild(lista);
                }
            }

        })
        .catch(response => {
            console.log("Error: " + response.error);
        })
});