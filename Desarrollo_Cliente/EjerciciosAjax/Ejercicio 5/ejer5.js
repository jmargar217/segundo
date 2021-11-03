window.onload = cargarProvincias;

const listaProvincias = document.getElementById("provincias");
const listaMunicipios = document.getElementById("municipios");

function cargarProvincias() {
    fetch('https://intranetjacaranda.es/Ejercicios/Ejercicio5/servidor/cargaProvinciasJSON.php')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(datos => {

            let provincias = JSON.stringify(datos);


            for (let i = 0; i < provincias.length; i++) {

            }

        })
        .catch(response => {
            console.log("Error: " + response.error);
        })

}

listaProvincias.addEventListener('change', (e) => {
    fetch('https://intranetjacaranda.es/Ejercicios/Ejercicio5/servidor/cargaMunicipiosJSON.php?codigo=' + e.target.value)
        .then(response => {
            if (response.ok) {
                return response.text();
            }
        })
        .then(datos => {
            let municipios = JSON.stringify(datos);
            for (let i = 0; i < municipios.length; i++) {

            }
        })
        .catch(response => {
            console.log("Error: " + response.error);
        })
});