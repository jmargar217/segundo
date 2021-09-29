let boton = document.getElementById("colorear").addEventListener('click', colorear);

function colorear() {
    let fila = document.getElementById("fil").value;
    let columna = document.getElementById("col").value;

    let pos = document.querySelectorAll("tr")[fila - 1].querySelectorAll("td")[columna - 1].classList.add("rojo");

}