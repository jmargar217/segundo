let body = document.getElementsByTagName("body")[0];

let array = ["Sevilla", "Cadiz", "Huelva", "Malaga", "Granada", "Almeria", "Jaen", "Cordoba"];

let ordenar = document.getElementById("boton");
ordenar.addEventListener("click", ordenaProvincias);


function ordenaProvincias() {
    array = array.sort();
    let tabla = document.createElement("table");

    for (let i = 0; i < array.length; i++) {
        let fila = document.createElement("tr");
        let celda = document.createElement("td");
        let provincia = document.createTextNode(array[i]);

        celda.appendChild(provincia);
        fila.appendChild(celda);
        tabla.appendChild(fila);
    }
    tabla.setAttribute("align", "center");
    tabla.setAttribute("border", 1);
    tabla.setAttribute("cellspacing", 0);
    tabla.setAttribute("cellpadding", 8);
    body.appendChild(tabla);
}