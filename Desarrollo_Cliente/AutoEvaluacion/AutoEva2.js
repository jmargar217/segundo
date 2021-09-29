const tabla = document.querySelector("table");
const inserta = document.querySelector("#insertar");
const borrar = document.querySelector("#borrar");
const modifica = document.querySelector("#modificar");

inserta.addEventListener("click", insertar);
borrar.addEventListener("click", borra);
modifica.addEventListener("click",modificar);

function insertar(e) {
    e.preventDefault();
    
    let num = document.querySelector("#numero").value;
    let dni = document.querySelector("#dni").value;
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellidos").value;

    let encontrado = false;
    let comprobar = document.querySelectorAll("tr");
    for (let i = 0; i < comprobar.length; i++) {
        let aux = comprobar[i].querySelectorAll("td")[1];
        if (aux.innerText == dni) {
            encontrado = true;

        }
    }
    if (!encontrado) {
        let fila = document.createElement("tr");
        let c1 = document.createElement("td");
        let c2 = document.createElement("td");
        let c3 = document.createElement("td");
        let c4 = document.createElement("td");

        c1.appendChild(document.createTextNode(num));
        c2.appendChild(document.createTextNode(dni));
        c3.appendChild(document.createTextNode(nombre));
        c4.appendChild(document.createTextNode(apellido));

        fila.appendChild(c1);
        fila.appendChild(c2);
        fila.appendChild(c3);
        fila.appendChild(c4);

        tabla.appendChild(fila);
        document.querySelector("#numEmpleados").textContent = "Número de empleados: " + parseInt(document.querySelectorAll("tr").length - 1);
    } else {
        alert("El empleado ya se encuentra registrado");
    }
}


function borra(e) {
    e.preventDefault();

    let dni = document.querySelector("#dni").value;
    let encontrado = false;
    let comprobar = document.querySelectorAll("tr");

    for (let i = 0; i < comprobar.length; i++) {
        let aux = comprobar[i].querySelectorAll("td")[1];
        if (aux.innerText == dni) {
            encontrado = true;

            tabla.deleteRow(i);
            document.querySelector("#numEmpleados").textContent = "Número de empleados: " + parseInt(document.querySelectorAll("tr").length - 1);
             
        }
    }
    if(!encontrado){
        alert("El empleado que quiere borrar no existe");

    }

}

/*
En	el	caso	de	que	no	exista	el	empleado	a	modificar	deberá
mostrar	una	alerta	indicando	que	el	empleado	a	modificar	no	existe.
*/

function modificar(e){
    e.preventDefault();

    let dni = document.querySelector("#dni").value;
    let comprobar = document.querySelectorAll("tr");

    for (let i = 0; i < comprobar.length; i++) {
        let aux = comprobar[i].querySelectorAll("td")[1];
        if (aux.innerText == dni) {
            encontrado = true;

            let num = document.querySelector("#numero").value;
            let nombre = document.querySelector("#nombre").value;
            let apellido = document.querySelector("#apellidos").value;


            let fila = document.createElement("tr");
            let c1 = document.createElement("td");
            let c2 = document.createElement("td");
            let c3 = document.createElement("td");
            let c4 = document.createElement("td");

            c1.appendChild(document.createTextNode(num));
            c2.appendChild(document.createTextNode(dni));
            c3.appendChild(document.createTextNode(nombre));
            c4.appendChild(document.createTextNode(apellido));

            fila.appendChild(c1);
            fila.appendChild(c2);
            fila.appendChild(c3);
            fila.appendChild(c4);

            let tbody = document.querySelector("tbody");
            tbody.replaceChild(fila,comprobar[i]);

        }
    }
    if(!encontrado){
        alert("El empleado a modificar no existe");
    }
}
