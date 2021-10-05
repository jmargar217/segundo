/*
Realiza un ejemplo donde obtengas toda la información posible del objeto location de forma ordenada.
Utiliza los métodos del objeto location para modificar la url, comprobando la diferencia entre assign y replace,
haz uso también del método reload.


assign =  una vez usado podemos volver a atrás
replace: despues de usarlo la página actual no se guardara en el historial del navegador, por lo que no podremos darle para atrás.
*/



const informacion = document.location;
const asignar = document.getElementById("assign").addEventListener("click", asig);
const reemplazar = document.getElementById("reemplazar").addEventListener("click", reemp);
const refresca = document.getElementById("ref").addEventListener("click",refrescar);

function asig() {
    informacion.assign("https://marca.com");
}

function reemp() {
    informacion.replace("https://marca.com");
}

function refrescar(){
    document.location.reload();
}