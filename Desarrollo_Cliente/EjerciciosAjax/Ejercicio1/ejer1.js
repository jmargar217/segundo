/*
Crear un script que compruebe con AJAX y la ayuda del servidor si el nombre escogido por
el usuario está libre o no. (Ojo la respuesta es texto, por lo que habría que recuperarla con
response.text())

A partir de la respuesta del servidor, mostrar un mensaje al usuario indicando el resultado de
la comprobación
*/

const boton = document.getElementById("comprobar");
boton.addEventListener("click", (e) => {
    let datos = new FormData(document.getElementById("formulario"));
    const opcion = {
        method: "POST",
        body: datos
    }

    fetch('http://joaquin.loc/compruebaDisponibilidad.php', opcion)
        .then(response => {
            if (response.ok) {
                return response.text();
            }
        })
        .then(respuestaTexto => {
            if (respuestaTexto == "si") {
                document.getElementById("disponibilidad").innerText = "El usuario si está disponible";
            } else if (respuestaTexto == "no") {
                document.getElementById("disponibilidad").innerText = "El usuario no está disponible";
            }
        })
        .catch(response => {
            console.log("Error: " + response.error);
        })
});