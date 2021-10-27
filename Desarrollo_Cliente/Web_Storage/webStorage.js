let contador = 0;
const tabla = document.getElementById("tabla");
const crear = document.getElementById("crear");

window.onload = cargarTareas;

crear.addEventListener("click", () => {
    contador += 1
    let titulo = document.getElementById("texto").value;
    const tarea = {
        id: contador,
        nombre: titulo,
        finalizada: false
    }
    localStorage.setItem(contador, JSON.stringify(tarea));
    location.reload();
});

function cargarTareas() {
    console.log(localStorage.length);
    console.log(localStorage[1]);
    console.log(localStorage[2]);

    for (let i = 1; i <= localStorage.length; i++) {
        contador += 1;

        let clave = localStorage.key(i);
        let titulo = localStorage.getItem(clave);

        let fila = document.createElement("tr");

        let celduno = document.createElement("td");
        let celdos = document.createElement("td");
        let celtres = document.createElement("td");

        let casilla = document.createElement("input");
        casilla.setAttribute("name", "casilla");
        casilla.setAttribute("type", "checkbox");
        casilla.setAttribute("id", clave);

        let borrar = document.createElement("input");
        borrar.setAttribute("type", "button");
        borrar.setAttribute("name", "borrar");
        borrar.setAttribute("value", "borrar");
        borrar.setAttribute("id", clave);

        let texto = document.createTextNode(titulo);

        celduno.append(casilla);
        celdos.appendChild(texto);
        celtres.appendChild(borrar);
        fila.appendChild(celduno);
        fila.appendChild(celdos);
        fila.appendChild(celtres);

        tabla.appendChild(fila);
    }
}

tabla.addEventListener("click", (e) => {
    if (e.target.name == "borrar") {
        localStorage.removeItem(e.target.id);
        location.reload();
    } else if (e.target.name == "casilla" && e.target.checked) {
        tabla.rows[e.target.id - 1].cells[1].classList.add("verde");

    } else if (e.target.name == "casilla" && !e.target.checked) {
        tabla.rows[e.target.id - 1].cells[1].classList.remove("verde");
    }
});