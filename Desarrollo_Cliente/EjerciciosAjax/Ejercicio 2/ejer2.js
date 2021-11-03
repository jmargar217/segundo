/*
Modificar el ejercicio
de comprobación de disponibilidad de los nombres para que permita mostrar una serie de valores
alternativos devueltos por el servidor.
*/

const boton = document.getElementById("comprobar");
boton.addEventListener("click", () => {
    let nombre = document.getElementById("login").value;

    fetch('http://joaquin.loc/compruebaDisponibilidadXML.php?parametro1=' + nombre)
        .then(response => {
            if (response.ok) {
                return response.text();
            }
        })
        .then(datos => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(datos, "application/xml");

            let respuestas = xml.getElementsByTagName("respuesta")[0];
            let disponible = respuestas.getElementByTagName("disponible")[0].firstChild.nodeValue;

            if (disponible == "si") {
                document.getElementById("disponibilidad").innerText = "El usuario si está disponible";

            } else {
                let div = document.getElementById("disponibilidad");
                let alternativas = respuestas.getElementsByTagName("alternativas")[0];
                let login = alternativas.getElementsByTagName("login");
                document.getElementById("disponibilidad").innerText = "El usuario no está disponible";

                let lista = document.createElement("ul");
                for (let i = 0; i < login.length; i++) {
                    let respuesta = login[i];
                    let fila = document.createElement("li");
                    let enlace = document.createElement("a");

                    enlace.textContent = respuesta.textContent
                    enlace.setAttribute("name", enlace.textContent);
                    enlace.setAttribute("href", "#");
                    enlace.addEventListener("click", (e) => {
                        document.getElementById("login").innerText = e.target.name;
                    })

                    fila.appendChild(enlace);
                    lista.appendChild(fila);
                    div.appendChild(lista)
                }
            }
        })
        .catch(response => {
            console.log("Error: " + response.error);
        })
});