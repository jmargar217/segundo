


let tabla1 = document.getElementById("tabla");
let posicion = document.getElementById("pos").value;
let puntos = document.getElementById("punto").value;
let nombre = document.getElementById("equipo").value;

let aplicar = document.getElementById("boton");
aplicar.addEventListener('click', ordenar);


function ordenar() {
    
    //let fila = document.getElementsByTagName("tr")[posicion - 1];
    let fila = tabla1.children[0].children[posicion];

    let nuevoNodo = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");

    col1.appendChild(document.createTextNode(posicion));
    col2.appendChild(document.createTextNode(nombre));
    col3.appendChild(document.createTextNode(puntos));

    nuevoNodo.appendChild(col1);
    nuevoNodo.appendChild(col2);
    nuevoNodo.appendChild(col3);
    
    fila.replaceWith(nuevoNodo);
}