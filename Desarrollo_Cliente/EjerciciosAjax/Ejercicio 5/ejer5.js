window.onload = cargarProvincias;

const listaProvincias = document.getElementById("provincias");
const listaMunicipios = document.getElementById("municipios");

function cargarProvincias() {
    fetch('http://joaquin.loc/cargaProvinciasJSON.php')
        .then(datos => {
            if (datos.ok) {
                return datos.text();
            }
        })
        .then(cadena => {
            let provincias = JSON.parse(cadena);
            let key = Object.keys(provincias);
            let value = Object.values(provincias);

            for (let i = 0; i < key.length; i++) {
                let codigo = key[i];
                let nombre = value[i];
                listaProvincias.options[i + 1] = new Option(nombre, codigo);
            }

        })
        .catch(response => {
            console.log("Error: " + response.error);
        })

}

listaProvincias.addEventListener('change', (e) => {

    let valor = new FormData();
    valor.append("provincia", e.target.value);
    const opcion = {
        method: "POST",
        body: valor
    }

    fetch('http://joaquin.loc/cargaMunicipiosJSON.php', opcion)
        .then(response => {
            if (response.ok) {
                return response.text();
            }
        })
        .then(datos => {
            let municipios = JSON.parse(datos);

            let key = Object.keys(municipios);
            let value = Object.values(municipios);

            for (let i = 0; i < key.length; i++) {
                let codigo = key[i];
                let nombre = value[i];
                listaMunicipios.options[i + 1] = new Option(nombre, codigo);
            }
        })
        .catch(response => {
            console.log("Error: " + response.error);
        })
});