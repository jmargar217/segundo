
const formulario = document.getElementById("formulario");
const tabla = document.getElementById("tabla");

let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let login = document.getElementById("login");
let password = document.getElementById("password");
let fecha = document.getElementById("fecha");

const borrar = document.getElementById("borrar");
const consultarUsuario = document.getElementById("consultar");
const consultarUltimo = document.getElementById("consultarUltimo");

// Con la expresión regular regExApellidos controlo que solo se puedan meter letras, solo dos Palabras
// y que esas dos palabras empiezan por mayúsculas
const regExApellidos = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;

// Con la expresión regular regExPassword controlo que la password empiece por 3 letras mayúsculas seguidos de 3 numeros del 1 al 9
const regExPassword = /^[A-Z]{3}[1-9]{3}/;

const formuValido = {
    nombre: false,
    apellidos: false,
    login: false,
    password: false,
    fecha: false
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    validarFormulario();
})

nombre.addEventListener("change",()=>{
    fetch('https://intranetjacaranda.es/pruebaJS/arrayNombres.php?nombre='+nombre.value)
        .then(response=>{
            if(response.ok){
                return response.text();
            }
        })
        .then(datos=>{
            let div = document.getElementById("sugerencia");
            div.textContent = datos;
            //Compruebo que el campo nombre no este vacio
            if(nombre.value.length > 0){
                formuValido.nombre=true;
            }else{
                formuValido.nombre=false;
            }

        })

});


apellidos.addEventListener('change',()=>{
    if(regExApellidos.test(apellidos.value)){
        formuValido.apellidos=true;
    }else{
        formuValido.apellidos=false;
    }

});


login.addEventListener('change',()=>{
    let nick = new FormData();
    nick.append("login",login.value);

    const opcion = {
        method:"POST",
        body:nick
    }

    fetch('https://intranetjacaranda.es/pruebaJS/checkLogin.php',opcion)
        .then(response=>{
            if(response.ok){
                return response.text();
            }

        })
        .then(datos=>{
            const parser = new DOMParser();
            const xml = parser.parseFromString(datos, "application/xml");

            let respuestas = xml.getElementsByTagName("respuesta")[0];
            let disponible = respuestas.getElementsByTagName("disponible")[0].firstChild.nodeValue;

            if(disponible=="si"){
                formuValido.login=true;
                document.getElementById("disponibilidad").innerText = "El usuario si está disponible";

            }else{
                formuValido.login=false;
                let div = document.getElementById("disponibilidad");
                let alternativas = respuestas.getElementsByTagName("alternativas")[0];
                let login = alternativas.getElementsByTagName("login");
                document.getElementById("disponibilidad").innerText = "El usuario no está disponible";

                let lista = document.createElement("ul");
                for (let i = 0; i < login.length; i++) {
                    let respuesta = login[i];
                    let fila = document.createElement("li");
                    let texto = document.createTextNode(respuesta.textContent)
                    fila.appendChild(texto);
                    lista.appendChild(fila);
                    div.appendChild(lista)
                }
        }
        })
});


password.addEventListener('change',()=>{
    if(regExPassword.test(password.value)){
        formuValido.password=true;
    }else{
        formuValido.password=false;
    }

});

fecha.addEventListener('change',()=>{
    let dateActual = new Date();
    let dateObtenido = new Date(fecha.value);

    let aux = dateActual.getFullYear()-dateObtenido.getFullYear();

    if(aux >=18){
        formuValido.fecha=true;
        formuValido
    }else{
        formuValido.fecha=false;
    }

});


borrar.addEventListener("click",()=>{
    localStorage.clear();

});

consultarUsuario.addEventListener("click",()=>{
    if(login.value == ""){
        alert("El login esta vacio");
    }else{
        let usuario = JSON.parse(localStorage.getItem(login.value));
        if(usuario == null){
            alert("El usuario no se encuentra registado");
        }else{
            let fila = document.createElement("tr");

            let celdaUno = document.createElement("td");
            let texto = document.createTextNode(usuario.nombre);
            celdaUno.appendChild(texto);

            let celdaDos = document.createElement("td");
            texto = document.createTextNode(usuario.apellidos);
            celdaDos.appendChild(texto);

            let celdaTres = document.createElement("td");
            texto = document.createTextNode(usuario.login);
            celdaTres.appendChild(texto);

            let celdaCuatro = document.createElement("td");
            texto = document.createTextNode(usuario.password);
            celdaCuatro.appendChild(texto);

            let celdaCinco = document.createElement("td");
            texto = document.createTextNode(usuario.fecha);
            celdaCinco.appendChild(texto);

            let celdaSeis= document.createElement("td");
            texto = document.createTextNode(usuario.edad);
            celdaSeis.appendChild(texto);

            fila.appendChild(celdaUno);
            fila.appendChild(celdaDos);
            fila.appendChild(celdaTres);
            fila.appendChild(celdaCuatro);
            fila.appendChild(celdaCinco);
            fila.appendChild(celdaSeis);
            tabla.appendChild(fila);

        }
    }

});

consultarUltimo.addEventListener("click",()=>{
    if(localStorage.length==0){
        alert("No hay usuarios registrados");
    }else{
        let date = new Date();
        let id= "";

        for(let i=0;i<localStorage.length;i++){
            id = localStorage.key(i);
            let valor = JSON.parse(localStorage.getItem(id));
            let fechaAux = valor.fechaAlta;

            if(fechaAux < date){
                id = valor.login;
                date = fechaAux;
            }
        }

        let ultimoUsuario = JSON.parse(localStorage.getItem(id));

        let fila = document.createElement("tr");

        let celdaUno = document.createElement("td");
        let texto = document.createTextNode(ultimoUsuario.nombre);
        celdaUno.appendChild(texto);

        let celdaDos = document.createElement("td");
        texto = document.createTextNode(ultimoUsuario.apellidos);
        celdaDos.appendChild(texto);

        let celdaTres = document.createElement("td");
        texto = document.createTextNode(ultimoUsuario.login);
        celdaTres.appendChild(texto);

        let celdaCuatro = document.createElement("td");
        texto = document.createTextNode(ultimoUsuario.password);
        celdaCuatro.appendChild(texto);

        let celdaCinco = document.createElement("td");
        texto = document.createTextNode(ultimoUsuario.fecha);
        celdaCinco.appendChild(texto);

        let celdaSeis = document.createElement("td");
        texto = document.createTextNode(ultimoUsuario.edad);
        celdaSeis.appendChild(texto);


        fila.appendChild(celdaUno);
        fila.appendChild(celdaDos);
        fila.appendChild(celdaTres);
        fila.appendChild(celdaCuatro);
        fila.appendChild(celdaCinco);
        fila.appendChild(celdaSeis);
        tabla.appendChild(fila);
    }

});


function validarFormulario() {
    const formValues = Object.values(formuValido);
    const valid = formValues.findIndex(value => value == false);
    if (valid == -1) {
        let dateActual = new Date();
        let dateObtenido = new Date(fecha.value);
    
        let calcularEdad = dateActual.getFullYear()-dateObtenido.getFullYear();

        const usuario = {
            nombre: nombre.value,
            apellidos: apellidos.value,
            login: login.value,
            password: password.value,
            edad: calcularEdad,
            fecha: fecha.value,
            fechaAlta: new Date()
             
        }

        let aux = localStorage.getItem(usuario.login);
        if (aux == null) {
            localStorage.setItem(usuario.login, JSON.stringify(usuario));
        } else {
            alert("El usuario: " + usuario.login + " ya se encuentra dado de alta");
        }

    } else {
        alert("Datos no válidos");
    }
}