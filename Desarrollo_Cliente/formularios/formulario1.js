/*
Formulario con expresiones regulares y condicionales que hagan aparecer preguntas en función de la respuesta
*/


const formulario = document.querySelector("form");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellido");
const dni = document.getElementById("dni");
const coches = document.getElementById("coches");
const hijos = document.getElementById("hijos");

const regExTexto = /^([A-Z][a-z]+)/mg;
const regExDni = /^([1-9][0-9]{7}[A-Z]+)/mg;
const regExNumeros = /^([1-9]*)/mg;

const formuValido = {
    nombre: false,
    //apellidos: false,
    //dni: false,
    //coches: false,
    //hijos: false
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    validarFormulario();
})


nombre.addEventListener('change', (e) => {
    e.preventDefault();

    if (e.target.value.trim().length > 0 && regExTexto.test(e.target.value)) {
        formuValido.nombre = true;
    } else {
        alert("Nombre incorrecto");
    }

})


function validarFormulario() {
    const formValues = Object.values(formuValido);
    const valid = formValues.findIndex(value => value == false);
    if (valid == -1) {
        formulario.submit();
    } else {
        alert("Datos no válidos");
    }

}