/*
Formulario con expresiones regulares y condicionales que hagan aparecer preguntas en función de la respuesta
*/

const formulario = document.querySelector("form");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellido");
const dni = document.getElementById("dni");
const coches = document.querySelector("input[name='coches']:checked").value;
const hijos = document.querySelector("input[name='hijos']:checked").value;

const regExNombre = /^([A-Z][a-z]+$)/;
const regExApellidos = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
const regExDni = /^([1-9][0-9]{7}[A-Z]+$)/;
const regExNumeros = /^([1-9]*)/;

const formuValido = {
    nombre: false,
    apellidos: false,
    dni: false,
    coches: false,
    //hijos: false
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    validarFormulario();
})


nombre.addEventListener('change', (e) => {

    if (e.target.value.trim().length > 0 && regExNombre.test(e.target.value)) {
        formuValido.nombre = true;
    }else{
        alert("El nombre es incorrecto");
    }
})

apellidos.addEventListener('change', (e) => {
    if (e.target.value.trim().length > 0 && regExApellidos.test(e.target.value)) {
        formuValido.apellidos = true;
    }else{
        alert("El apellido es incorrecto");
    }
})

dni.addEventListener('change', (e) => {
    if (regExDni.test(e.target.value)) {
        formuValido.dni = true;
    }else{
        alert("El dni es incorrecto");
    }

})

coches[0].addEventListener('change',(e) => {
    if(coches[0].checked){
        document.getElementById("numC").classList.remove("oculto");
    }

})

coches[1].addEventListener('change',(e) => {
    if(coches[1].checked){
        document.getElementById("numC").classList.add("oculto");
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