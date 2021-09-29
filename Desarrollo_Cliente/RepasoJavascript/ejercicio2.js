let lista1 = document.getElementById("lista");

let add1 = document.getElementById("add");
add1.addEventListener('click', anadirProducto);

let borra = document.getElementById("borrar");
borra.addEventListener('click', borrarProducto);


function anadirProducto() {
    let nombreProducto = document.getElementById("nombre").value;
    let pos = document.getElementById("posicion").value;

    let filas = document.getElementsByTagName("li")[parseInt(pos - 1)];

    let producto = document.createElement("li");
    let texto = document.createTextNode(nombreProducto);
    producto.appendChild(texto);

    lista1.insertBefore(producto, filas);
}

function borrarProducto() {
    pos = document.getElementById("posicion").value;
    filas = document.getElementsByTagName("li")[parseInt(pos - 1)];

    lista1.removeChild(filas);
}