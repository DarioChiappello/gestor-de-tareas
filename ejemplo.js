console.log("Task Control");

let fs = require('fs');

let tarea = {
    titulo: " titulo de prueba",
    descripcion: "descripcion",
    estado: "pendiente"
}

let tareas = fs.readFileSync('./archivo.json', 'utf-8')
tareas = JSON.parse(tareas)
    /*
    let tareas = [{
            titulo: "titulo 1",
            descripcion: "descripcion 1",
            estado: "realizado"
        },
        {
            titulo: "titulo 2",
            descripcion: "descrip 2",
            estado: "fallido"
        },
        {
            titulo: "titulo 3",
            descripcion: "descrip 3",
            estado: "pendiente"
        }
    ]

    tareas.push({
        titulo: "titulo 4",
        descripcion: "decrip 4",
        estado: "pendiente"
    });
    */




function listarTodas() {
    for (let i = 0; i < tareas.length; i++) {
        console.log(tareas[i].titulo)

    }
}

function listarNoTerminadas() {
    for (let i = 0; i < tareas.length; i++) {

        if (tareas[i].estado == 'pendiente') {
            console.log(tareas[i].titulo)
        }

    }
}

listarTodas();
listarNoTerminadas();

//console.log(JSON.stringify(tareas));