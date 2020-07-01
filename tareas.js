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

function borrar() {
    let tareas = leerArchivo();
    let tareasActualizadas = tareas.filter(
        function(tarea) {
            return parametros[0] !== tarea.titulo;
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