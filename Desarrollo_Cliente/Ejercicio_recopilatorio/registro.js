const formulario = document.getElementById("registro");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validarFormulario();
});

const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const dni = document.getElementById("dni");
const fecha = document.getElementById("fecha");

const regExNombre = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
const regExTelefono = /^[\d]{3}[-]*([\d]{2}[-]*){2}[\d]{2}$/;
const regExDni = /^([1-9][0-9]{7}[A-Z]+$)/;


let formuValido = {
    nombre: false,
    telefono: false,
    dni: false,
    fecha: false
};


nombre.addEventListener('change',(e)=>{
    if(e.target.value.trim().length >0 &&  regExNombre.test(e.target.value)){
        formuValido.nombre = true;
    }else{
        alert("Error en el nombre");
    }
});


telefono.addEventListener('change',(e)=>{
    if(e.target.value.trim().length >0 &&  regExTelefono.test(e.target.value)){
        formuValido.telefono = true;
    }else{
        alert("Error en el teléfono");
    }
});

dni.addEventListener('change',(e)=>{
    if(e.target.value.trim().length >0 &&  regExDni.test(e.target.value)){
        formuValido.dni = true;
    }else{
        alert("Error en el dni");
    }
});


fecha.addEventListener('change',(e)=>{
    lista = e.target.value.split("-");
    let year =  parseInt(lista[2]);
    fechaActual = new Date();
    let aux = fechaActual.getFullYear();

    if(aux - year>18){
        formuValido.fecha=true;
    }else{
        alert("Error fecha");
    }

});

function validarFormulario() {
    const formValues = Object.values(formuValido);
    const valid = formValues.findIndex(value => value == false);
    if (valid == -1) {
        const datosValidados = {
            nombreValido: nombre.value,
            telefonoValido: telefono.value,
            dniValido: dni.value,
            fechaValido: fecha.value

        };  
        const peticion=new XMLHttpRequest();
        peticion.open('POST', 'http://localhost:3000/users');
        peticion.setRequestHeader('Content-type', 'application/json');  
        peticion.send(JSON.stringify(datosValidados));     
    } else {
        alert("Datos no válidos");
    }

}