window.onload = cargarTareas;

let contador = 0;
const tabla = document.getElementById("tabla");
const crear = document.getElementById("crear");

crear.addEventListener("click",(e)=>{
    contador+=1
    let titulo = document.getElementById("texto").value;
    const tarea = {
        id: contador,
        nombre: titulo,
        finalizada: false
    }
    localStorage.setItem(contador,JSON.stringify(tarea));
    location.reload();
});

function cargarTareas(){

    for(let i=0; i<localStorage.length;i++){
        contador+=1;
        let clave = localStorage.key(i);
        let titulo = localStorage.getItem(clave);
        
        let fila = document.createElement("tr");
        let celda = document.createElement("td");
        let texto = document.createTextNode(titulo);

        celda.appendChild(texto);
        fila.appendChild(celda);
        tabla.appendChild(fila);
    }
    
}
