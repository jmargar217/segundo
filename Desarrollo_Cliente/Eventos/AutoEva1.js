/*
Crea la página ejercicio1.html.

Esta página tendrá un botón cuyo nombre será “Inicializa array”. Al pulsar el botón se llamará a la función java[script
“inicializar()”. 

Esta función javascript solicitará 5 nombres mediante cuadros de diálogo 
que deberán ir apareciendo de uno en uno. 

Deberá crearse un array vacío al que se irán añadiendo de uno en uno cada uno de los nombres introducidos.

Deberá controlarse que no se pueden introducir en el array nombres repetidos.
Si el nombre ya existe en el array deberá mostrarse una alerta indicando que ya existe y que debe introducir otro nombre.


Una vez introducidos los 5 nombres deberá mostrarse por consola la primera letra en mayúscula de cada uno de los nombres
introducidos en el array ordenadas por orden alfabético.
*/

lista = [];
const boton = document.querySelector("button");
boton.addEventListener("click",inicializar);

function inicializar(){
    while(lista.length != 5){
        let nombre = prompt("Indique el nombre ");

        if (!lista.includes(nombre)){
            lista.push(nombre);
        }else{
            alert("El nombre ya existe, introduzca otro");
            nombre = prompt("Indique el nombre ");

            if(!lista.includes(nombre)){
                lista.push(nombre);
            }
            
        }
    }  
    
    

    
}
