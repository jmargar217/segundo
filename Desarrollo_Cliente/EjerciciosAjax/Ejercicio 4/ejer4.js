window.onload = cargarProvincias;

const listaProvincias = document.getElementById("provincias");
const listaMunicipios = document.getElementById("municipios");

function cargarProvincias() {
    fetch('http://joaquin.loc/cargaProvinciasXML.php')
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
    let provincia = new FormData();
    provincia.append("provincia", e.target.value);
    const opcion = {
        method: "POST",
        body: provincia
    }

    fetch('http://joaquin.loc/cargaMunicipiosXML.php', opcion)
        .then(response => {
            if (response.ok) {
                return response.text();
            }
        })
        .then(datos => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(datos, "application/xml");

            let municipios = xml.getElementsByTagName("municipios")[0];
            let municipio = municipios.getElementsByTagName("municipio");

            for (let i = 0; i < municipio.length; i++) {
                let codigo = municipio[i].getElementsByTagName("codigo")[0].firstChild.nodeValue;
                let nombre = municipio[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
                listaMunicipios.options[i + 1] = new Option(nombre, codigo);

            }
        })
        .catch(response => {
            console.log("Error: " + response.error);
        })
});