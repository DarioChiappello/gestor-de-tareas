const tareas = require('./tareas.js');

//let parametros = process.argv;
let accion = process.argv[2];
let parametros = process.argv.slice(3);
switch (accion) {
    case undefined:
    case 'todas':
        tareas.todas()
        break;
    case 'pendientes':
        tareas.pendientes()
        break;
    case 'crear':
        tareas.crear(parametros[0], parametros[1])
        break;
    case 'borrar':
        tareas.borrar()
        break;
    default:
        console.log('Accion erronea');
        break;
}