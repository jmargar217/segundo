const pendingTasks = document.getElementById('pending-tasks')
const finishedTasks = document.getElementById('finished-tasks')
const doingTasks = document.getElementById('doing-tasks')
const boton = document.getElementById("crear");

window.onload = cargarTareas;

boton.addEventListener("click", () => {
    let status = "pendiente";
    let texto = document.getElementById("texto").value;
    const tarea = {
        id: localStorage.length + 1,
        nombre: texto,
        estado: status
    }
    localStorage.setItem(tarea.id, JSON.stringify(tarea));
    location.reload();

})

function cargarTareas() {
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        let tarea = JSON.parse(localStorage.getItem(clave));

        if (tarea.estado == "pendiente") {
            let div = document.createElement("div");
            div.setAttribute("id", tarea.id);
            div.classList.add('task');
            div.setAttribute("draggable", "true")
            let aux = document.createTextNode(tarea.nombre);
            div.appendChild(aux);
            pendingTasks.appendChild(div);

        } else if (tarea.estado == "realizando") {
            let div = document.createElement("div");
            div.setAttribute("id", tarea.id);
            div.classList.add('task');
            div.setAttribute("draggable", "true")
            let aux = document.createTextNode(tarea.nombre);
            div.appendChild(aux);
            doingTasks.appendChild(div);

        } else if (tarea.estado == "finalizada") {
            let div = document.createElement("div");
            div.setAttribute("id", tarea.id);
            div.classList.add('task');
            div.setAttribute("draggable", "true")
            let aux = document.createTextNode(tarea.nombre);
            div.appendChild(aux);
            finishedTasks.appendChild(div);
        }
    }

}

//dataTransfer
//setData: Establece la información que queremos compartir
//getData: Establece la información que queremos obtener
pendingTasks.addEventListener('dragover', (e) => {
    e.preventDefault()
})
pendingTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})
pendingTasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})
pendingTasks.addEventListener('dragstart', (e) => {
    console.log(e.dataTransfer)
    e.target.classList.add('active')

    e.dataTransfer.setData('text/plain', e.target.id)
    console.log(e.dataTransfer.getData)
})


pendingTasks.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    const padre = element.parentNode.id

    let id = e.dataTransfer.getData("text");
    let tarea = JSON.parse(localStorage.getItem(id));   

    
    tarea.estado = "pendiente";
    localStorage.setItem(id, JSON.stringify(tarea));

    switch (padre) {
        case 'pending-tasks':
            pendingTasks.appendChild(pendingTasks.removeChild(element));
            break;
        case 'doing-tasks':
            pendingTasks.appendChild(doingTasks.removeChild(element));
            break;
    }

    pendingTasks.appendChild(element);
})

doingTasks.addEventListener('dragstart', (e) => {
    console.log(e.dataTransfer)
    e.dataTransfer.setData('text/plain', e.target.id)
    console.log(e.dataTransfer.getData)
})

doingTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})

doingTasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})

doingTasks.addEventListener('dragover', (e) => {
    e.preventDefault()
})


doingTasks.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))

    let id = e.dataTransfer.getData("text");
    let tarea = JSON.parse(localStorage.getItem(id));

   
    tarea.estado = "realizando";
    localStorage.setItem(id, JSON.stringify(tarea));

    element.classList.remove('active')
    doingTasks.appendChild(element);
})


//IMPRESCINDIBLE
finishedTasks.addEventListener('dragover', (e) => {
    e.preventDefault()
})
finishedTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})
finishedTasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})
finishedTasks.addEventListener('dragstart', (e) => {
    console.log(e.dataTransfer)
    e.target.classList.add('active')

    e.dataTransfer.setData('text/plain', e.target.id)
    console.log(e.dataTransfer.getData)
})


finishedTasks.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    const padre = element.parentNode.id

    let id = e.dataTransfer.getData("text");
    let tarea = JSON.parse(localStorage.getItem(id));

    tarea.estado = "finalizada";
    localStorage.setItem(id, JSON.stringify(tarea));
    

    switch (padre) {
        case 'pending-tasks':
            console.log('pendingTasks');
            finishedTasks.appendChild(pendingTasks.removeChild(element));
            break;
        case 'doing-tasks':
            console.log('doingTasks');
            finishedTasks.appendChild(doingTasks.removeChild(element));
            break;
    }
})