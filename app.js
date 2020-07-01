const tareas = require('./tareas.js');

//let parametros = process.argv;
let accion = process.argv[2];
let parametros = process.argv.slice(3);
switch (accion) {
    case undefined:
        console.log("Ingresar parametros correctamente!");
        break;
    case 'listar':
        tareas.listar();
        break;
    case 'pendientes':
        tareas.pendientes();
        break;
    case 'terminado':
        tareas.terminados();
        break;
    case 'proceso':
        tareas.proceso();
        break;
    case 'crear':
        tareas.crear(parametros[0], parametros[1])
        break;
    case 'borrar':
        tareas.borrar(parametros[0])
        break;
    case 'completar':
        tareas.completar(parametros[0]);
        break;
    case 'iniciar':
        tareas.iniciar(parametros[0]);
        break;
    case 'detalle':
        tareas.detalle(parametros[0]);
        break;
    default:
        console.log('Accion erronea');
        break;
}