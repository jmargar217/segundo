/*
Crea un ejemplo que nos permita navegar por el historial con el objeto history,
para ello deberás realizar varias páginas y navegar entre ellas haciendo uso de este objeto.
*/

const delante = document.getElementById("delante").addEventListener("click",adelantar);


/*
Nos dirige a la ultima página que visitamos, en las páginas enlazadas defino el history.back para volver hacia atrás.
*/
function adelantar(){
    window.history.go(1);
}




