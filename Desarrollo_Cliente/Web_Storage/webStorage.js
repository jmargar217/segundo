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
        estado: false
    }
    localStorage.setItem(contador, JSON.stringify(tarea));
    location.reload();
});

function cargarTareas() {
<<<<<<< HEAD
    console.log(localStorage.length);
    console.log(localStorage[1]);
    console.log(localStorage[2]);

    for (let i = 1; i <= localStorage.length; i++) {
=======
    for (let i = 0; i < localStorage.length; i++) {
>>>>>>> 126bb67d2ceb0f77edad8c0c73d6793a0cc922e7
        contador += 1;

        let clave = localStorage.key(i);
        let tarea = JSON.parse(localStorage.getItem(clave));

        let fila = document.createElement("tr");

        let celduno = document.createElement("td");
        let celdos = document.createElement("td");
        let celtres = document.createElement("td");

        let casilla = document.createElement("input");
        casilla.setAttribute("name", "casilla");
        casilla.setAttribute("type", "checkbox");
        casilla.setAttribute("id", clave);

        if(tarea.estado == true){
            casilla.setAttribute("checked","checked");
            celdos.classList.add("verde");
        }

        let borrar = document.createElement("input");
        borrar.setAttribute("type", "button");
        borrar.setAttribute("name", "borrar");
        borrar.setAttribute("value", "borrar");
        borrar.setAttribute("id", clave);

        let texto = document.createTextNode(tarea.nombre);

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
    } 
    else if (e.target.checked) {
        let aux = JSON.parse(localStorage.getItem(e.target.id));
        aux.estado = true;
        localStorage.setItem(e.target.id,JSON.stringify(aux));
        location.reload();

    }
    else if (!e.target.checked) {
        let aux = JSON.parse(localStorage.getItem(e.target.id));
        aux.estado = false;
        localStorage.setItem(e.target.id,JSON.stringify(aux));
        location.reload();
        
    }
<<<<<<< HEAD
});
=======
});
>>>>>>> 126bb67d2ceb0f77edad8c0c73d6793a0cc922e7
