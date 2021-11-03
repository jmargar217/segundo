window.onload = cargarProvincias;

const listaProvincias = document.getElementById("provincias");
const listaMunicipios = document.getElementById("municipios");

function cargarProvincias() {
    fetch('https://intranetjacaranda.es/Ejercicios/Ejercicio4/servidor/cargaProvinciasXML.php')
        .then(response => {
            if (response.ok) {
                return response.text();
            }
        })
        .then(datos => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(datos, "application/xml");

            let provincias = xml.getElementsByTagName("provincias")[0];
            let provincia = provincias.getElementsByTagName("provincia");

            for (let i = 0; i < provincia.length; i++) {
                let codigo = provincia[i].getElementsByTagName("codigo")[0].firstChild.nodeValue;
                let nombre = provincia[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
                listaProvincias.options[i + 1] = new Option(nombre, codigo);
            }

        })
        .catch(response => {
            console.log("Error: " + response.error);
        })

}

listaProvincias.addEventListener('change', (e) => {
    fetch('https://intranetjacaranda.es/Ejercicios/Ejercicio4/servidor/cargaMunicipiosXML.php?codigo=' + e.target.value)
        .then(response => {
            if (response.ok) {
                return response.text();
            }
        })
        .then(datos => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(datos, "application/xml");

            let municipios = xml.getElementsByTagName("provincias")[0];
            let municipio = municipios.getElementsByTagName("provincia");

            for (let i = 0; i < municipio.length; i++) {
                let codigo = municipio[i].getElementsByTagName("codigo")[0].firstChild.nodeValue;

                if (codigo == e.target.value) {
                    let nombre = municipio[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
                    listaMunicipios.options[i + 1] = new Option(nombre, codigo);
                }
            }
        })
        .catch(response => {
            console.log("Error: " + response.error);
        })
});