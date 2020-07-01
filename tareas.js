const fs = require('fs');

function leerArchivo() {
    const tareasJson = fs.readFileSync('./archivo.json', 'utf-8');
    return JSON.parse(tareasJson);
}



function escribirArchivoJSON(tareas) {
    let tareasJson = JSON.stringify(tareas, null, ' ');
    fs.writeFileSync('./archivo.json', tareasJson);
}





function todas() {
    let tareas = leerArchivo();
    tareas.forEach(element => {
        console.log(element.titulo + '|' + element.estado)
    });
}


function pendientes() {
    let tareas = leerArchivo();
    let tareasfiltradas = tareas.filter(elem => elem.estado == 'pendiente');
    tareasfiltradas.forEach(element => {
        console.log(element.titulo + '|' + element.estado)
    });
}

/*
function crear(titulo, descripcion = '', estado = 'pendiente') {
    if (titulo) {
        let tareas = leerArchivo();

        let tareaNueva = {
            titulo: parametros[0],
            descripcion: parametros[1],
            estado: 'pendiente'
        }
        tareas.push(tareaNueva);
        escribirArchivoJSON(tareas)
        console.log(tareas);
    } else {
        console.log('titulo mas largo')
    }

}
*/
function crear(titulo = '', descripcion = '', estado = 'pendiente') {
    let tareas = leerArchivo();
    if (titulo.length > 5) {
        let tareaNueva = {
            titulo: titulo,
            descripcion: descripcion,
            estado: 'pendiente'
        }
        tareas.push(tareaNueva);
        escribirArchivoJSON(tareas);
        console.log('¡Tarea creada con éxito!');
    } else {
        console.log('Debes ingresar un título y debe tener al menos 5 caracteres');
    }
}

function borrar(titulo) {
    let tareas = leerArchivo();
    let tareasActualizadas = tareas.filter(
        function(tarea) {
            return titulo !== tarea.titulo;
        }
    )
    escribirArchivoJSON(tareasActualizadas);
    if (tareas.length !== tareasActualizadas.length) {
        console.log('Tarea borrada')
    } else {
        console.log('no se encontro la tarea')
    }
}

module.exports = {
    todas,
    pendientes,
    crear,
    borrar
}