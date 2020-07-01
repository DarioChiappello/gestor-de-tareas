const fs = require('fs');
const chalk = require('chalk');

function leerArchivo() {
    if (fs.existsSync('./archivo.json')) {
        const tareasJson = fs.readFileSync('./archivo.json', 'utf-8');
        return JSON.parse(tareasJson);
    }
    return [];
}



function escribirArchivoJSON(tareas) {
    let tareasJson = JSON.stringify(tareas, null, ' ');
    fs.writeFileSync('./archivo.json', tareasJson);
}





function listar() {
    let tareas = leerArchivo();
    tareas.forEach(element => {
        if (element.estado == "terminado") {
            console.log(chalk.black.bgGreenBright(element.titulo + '|' + element.estado));
        } else if (element.estado == "en proceso") {
            console.log(chalk.black.bgYellowBright(element.titulo + '|' + element.estado));
        } else {
            console.log(chalk.black.bgRedBright(element.titulo + '|' + element.estado));
        }

    });
}


function pendientes() {
    let tareas = leerArchivo();
    let tareasfiltradas = tareas.filter(elem => elem.estado == 'pendiente');
    tareasfiltradas.forEach(element => {
        console.log(chalk.bgRedBright.black(element.titulo + '|' + element.estado));
    });
}

function terminados() {
    let tareas = leerArchivo();
    let tareasfiltradas = tareas.filter(elem => elem.estado == 'terminado');
    tareasfiltradas.forEach(element => {
        console.log(chalk.bgGreenBright.black(element.titulo + '|' + element.estado));
    });
}

function proceso() {
    let tareas = leerArchivo();
    let tareasfiltradas = tareas.filter(elem => elem.estado == 'en proceso');
    tareasfiltradas.forEach(element => {
        console.log(chalk.bgYellowBright.black(element.titulo + '|' + element.estado));
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
            estado: estado
        }
        tareas.push(tareaNueva);
        escribirArchivoJSON(tareas);
        console.log(chalk.bgGreenBright.black('¡Tarea creada con éxito!'));
    } else {
        console.log(chalk.bgRedBright.black('Debes ingresar un título y debe tener al menos 5 caracteres'));
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
        console.log(chalk.bgRedBright.black('Tarea borrada'));
    } else {
        console.log(chalk.bgRedBright.black('No se encontro la tarea'));
    }
}

function completar(title) {
    let tareas = leerArchivo();
    let indice = tareas.findIndex(elem => elem.titulo == title);
    if (indice != -1) {
        tareas[indice].estado = 'terminado';
        escribirArchivoJSON(tareas);
        console.log(chalk.bgGreenBright.black('Tarea completada!'));
    } else {
        console.log(chalk.bgRedBright.black('No existe la tarea a completar'));
    }
}

function iniciar(title) {
    let tareas = leerArchivo();
    let indice = tareas.findIndex(elem => elem.titulo == title);
    if (indice != -1) {
        tareas[indice].estado = 'en proceso';
        escribirArchivoJSON(tareas);
        console.log(chalk.bgYellowBright.black('Tarea en proceso!'));
    } else {
        console.log(chalk.bgRedBright.black('No existe la tarea a inicializar'));
    }
}

function detalle(title) {
    let tareas = leerArchivo();
    let find = tareas.find(element => element.titulo == title);
    if (find == undefined) {
        console.log(chalk.bgYellowBright.black('La tarea no existe'));
    } else {
        console.log(chalk.bgBlueBright.black('Titulo:', find.titulo));
        console.log(chalk.bgBlueBright.black('Descripcion:', find.descripcion));
        console.log(chalk.bgBlueBright.black('Estado:', find.estado));
    }
}

module.exports = {
    listar,
    pendientes,
    crear,
    borrar,
    terminados,
    proceso,
    completar,
    iniciar,
    detalle
}