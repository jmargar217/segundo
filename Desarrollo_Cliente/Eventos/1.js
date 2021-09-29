let caja = document.querySelector("#box");
caja.addEventListener('mouseenter',entrando);
caja.addEventListener('mouseleave',saliendo);
caja.addEventListener('mousedown',izquierdo);
caja.addEventListener('mouseup',soltar);

let texto = document.querySelector("input");
texto.addEventListener('keydown',tecla);
texto.addEventListener('keyup',soltar);


function entrando(){
    caja.classList.replace("box","verde");

}

function saliendo(){
    caja.classList.replace("verde","box");
}

function izquierdo(){
    console.log("Has pulsado la caja");
}

function soltar(){
    console.log("Has soltado el boton izquierdo dentor de la caja");
}

function tecla(){
    console.log("Has	pulsado	una	tecla");
}

function soltar(){
    console.log("Has soltado una tecla");
}
