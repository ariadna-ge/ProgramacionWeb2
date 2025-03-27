//inicializamos un arreglo para almacenar las tareas 
let tareas = [];

//función para mostrar un menú
function mostrarMenu (){
    return parseInt(prompt("OPCIONES DISPONIBLES: \n" + 
    "1. Agregar tarea \n" + 
    "2. Ver todas las tareas \n" + 
    "3. Marcar una tarea como completada \n" +
    "4. Salir \n" +
    "Elige una opción" 
));
}

function agregarTarea() {
    let nombre = prompt("Introduce el nombre de la tarea");
    if (nombre) {
        let tarea = {
            nombre: nombre,
            completada: false
        };
        tareas.push(tarea);
        alert("¡Tarea agregada exitosamente!");
    }else{
        alert("El nombre de la tarea no puede estar vacío...");
    }
}

function verTareas() {
    if (tareas.length == 0) {
        alert("¡No hay tareas en lista!");
    } else{
        let mensaje = "Lista de tareas: \n";
        tareas.forEach((tarea, index) => {
            mensaje += `${index+1} . ${tarea.nombre} [${tarea.completada ? "Completada" : "Pendiente"}] \n`;
        });
        alert(mensaje);
    }
}

function marcarTareaCompletada() {
    console.log("En proceso");
}

//función principal para manejar el programa 
function iniciarPrograma() {   
    let condicion = true;
    while (condicion) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa");
                condicion = false;
                break;
            default:
                alert("Opción no válida");
                break;
        }
    }
    alert("Programa finalizado");
}

//iniciar programa
iniciarPrograma();