/*
1. Un campo que nos permite seleccionar la fecha y hora y la muestra a continuación. La salida deberá tener elsiguiente formato:
Hoy es martes, 28 de Febrero de 2018 y son las 14:32 horas.
*/
const dias = ['domingo','lunes','martes','miércoles','jueves','viernes','sabado'];
const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

const fecha = document.getElementById("fecha").addEventListener("change",(e)=>{
    const aux = new Date(document.getElementById("fecha").value);
    document.getElementById("texto").innerText= 'Hoy es '+dias[aux.getDay()]+", "+aux.getDate()+" de "+meses[aux.getMonth()]+" y son las "+
    aux.getHours()+":"+aux.getMinutes();
    
})


/*
2. A continuación dos campos para introducir un mes y un año e imprima su calendario.
No hace falta esmerarse en la presentación del calendario, el calendario simplificado puede ser del tipo:

OCTUBRE – 2014
1 (miercoles), 2 (jueves), ….. , 31 (viernes).
*/

const boton = document.getElementById("calendario").addEventListener("click",(e)=>{
    let mes = document.getElementById("mes").value;
    let year = document.getElementById("year").value;

    if(mes >0 && mes <13 ){
      let fechap = new Date(year, mes-1,1);
      let auxt = fechap.getMonth();

      while(fechap.getMonth() == auxt){
           
          document.getElementById("prueba").innerText += fechap.getDate()+" ("+dias[fechap.getDay()]+"), ";
          fechap.setDate(fechap.getDate()+1) ;
      }
    }

})


/*
3. Un campo que nos permita introducir una fecha y otro que nos permita introducir los días de retraso en el pago,
una ves introducidos nos devolverá la fecha del pago.
*/

const pago = document.getElementById("pago").addEventListener("click",(e)=>{
    let fechita = new Date(document.getElementById("fechita").value);
    let numDias = document.getElementById("numDias").value;

    fechita.setDate(fechita.getDate()+parseInt(numDias));
    fechita.setMonth(fechita.getMonth()+parseInt(1));

    document.getElementById("prueba2").innerText = "La fecha de pago será el día "+fechita.getDate()+"/"+fechita.getMonth()+"/"+fechita.getFullYear();

})







