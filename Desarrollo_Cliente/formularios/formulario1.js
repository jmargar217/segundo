/*
Formulario con expresiones regulares y condicionales que hagan aparecer preguntas en función de la respuesta
*/


const formulario = document.querySelector("form");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellido");
const dni = document.getElementById("dni");
const coches = document.getElementById("coches");
const hijos = document.getElementById("hijos");

const regExNombre = /^([A-Z][a-z]+$)/;
const regExApellidos = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
const regExDni = /^([1-9][0-9]{7}[A-Z]+$)/;
const regExNumeros = /^([1-9]*)/;

const formuValido = {
    nombre: false,
    apellidos: false,
    dni: false,
    //coches: false,
    //hijos: false
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    validarFormulario();
})


nombre.addEventListener('change', (e) => {

    if (e.target.value.trim().length > 0 && regExNombre.test(e.target.value)) {
        formuValido.nombre = true;
    }
})

apellidos.addEventListener('change', (e) => {
    if (e.target.value.trim().length > 0 && regExApellidos.test(e.target.value)) {
        formuValido.apellidos = true;
    }
})

dni, addEventListener('change', (e) => {
    if (regExDni.test(e.target.value)) {
        formuValido.dni = true;
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