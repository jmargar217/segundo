/*
1. Un campo que nos permite seleccionar la fecha y hora y la muestra a continuación. La salida deberá tener elsiguiente formato:
Hoy es martes, 28 de Febrero de 2018 y son las 14:32 horas.
*/
const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sabado'];
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const fecha = document.getElementById("fecha").addEventListener("change", (e) => {
    const aux = new Date(document.getElementById("fecha").value);
    document.getElementById("uno").innerText = 'Hoy es ' + dias[aux.getDay()] + ", " + aux.getDate() + " de " + meses[aux.getMonth()] + " y son las " +
        aux.getHours() + ":" + aux.getMinutes();

})


/*
2. A continuación dos campos para introducir un mes y un año e imprima su calendario.
No hace falta esmerarse en la presentación del calendario, el calendario simplificado puede ser del tipo:

OCTUBRE – 2014
1 (miercoles), 2 (jueves), ….. , 31 (viernes).
*/

const boton = document.getElementById("calendario").addEventListener("click", (e) => {
    let mes = document.getElementById("mes").value;
    let year = document.getElementById("year").value;

    if (mes > 0 && mes < 13) {
        let fechap = new Date(year, mes - 1, 1);
        let auxt = fechap.getMonth();

        while (fechap.getMonth() == auxt) {

            document.getElementById("dos").innerText += fechap.getDate() + " (" + dias[fechap.getDay()] + "), ";
            fechap.setDate(fechap.getDate() + 1);
        }
    }

})


/*
3. Un campo que nos permita introducir una fecha y otro que nos permita introducir los días de retraso en el pago,
una ves introducidos nos devolverá la fecha del pago.
*/

const pago = document.getElementById("pago").addEventListener("click", (e) => {
    let fechita = new Date(document.getElementById("fechita").value);
    let numDias = document.getElementById("numDias").value;

    fechita.setDate(fechita.getDate() + parseInt(numDias));
    fechita.setMonth(fechita.getMonth() + 1);

    document.getElementById("tres").innerText = "La fecha de pago será el día " + fechita.getDate() + "/" + fechita.getMonth() + "/" + fechita.getFullYear();

})

/*
4. Un cronómetro con el siguiente formato:
Hoy es 30-9-2019 y son las 21:4:23 horas.
*/

function cronometro() {
    let fechaActual = new Date();
    document.getElementById("cuatro").innerText = "Hoy es " + fechaActual.getDate() + "-" + fechaActual.getMonth() + "-" + fechaActual.getFullYear() +
        " y son las " + fechaActual.getHours() + ":" + fechaActual.getMinutes() + ":" + fechaActual.getSeconds() + " horas.";

}

setInterval(cronometro, 100);


/*
5. Una alarma que mostrará la hora actual y nos permite indicar la hora a la que sonará, cuando llegue a la hora,
pregunta si se quiere posponer o detener, si se pospone "sonará" a los 2 minutos.
EXTRA: haz que suene un sonido además de mostrar el mensaje.
*/
const audio = new Audio('alarm.mp3');

function sonar() {
    let horaActual = new Date();
    document.getElementById("cinco").innerText = "La hora actual es: " + horaActual.getHours() + ":" + horaActual.getMinutes() + ":" + horaActual.getSeconds();

    let inputTime = document.getElementById("hora").value;
    let aux = inputTime.split(":");
    let horaDada = new Date(0, 0, 0, aux[0], aux[1], 0, 0);

    if (horaActual.getHours() == horaDada.getHours() &&
        horaActual.getMinutes() == horaDada.getMinutes() && horaActual.getSeconds() == horaDada.getSeconds()) {

        audio.play();

        let respuesta = prompt("¿Quieres posponer(P) o detener(D) la alarma?");
        if (respuesta == "P") {
            setTimeout(posponer, 120000);
        } else {
            document.getElementById("siete").innerText = "Alarma detenida!";
        }
    }
}

function posponer() {
    document.getElementById("siete").innerText = "Sonando alarma";
    audio.play();
}

setInterval(sonar, 1000);