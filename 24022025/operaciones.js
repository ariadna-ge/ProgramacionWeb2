/* PROGRAMA QUE REALIZA DIVERSAS OPERACIONES, SEGÚN LO SOLICITE EL USUARIO */

// Funciones que realizan suma, resta, multiplicacion, division, y  muestra el módulo
function suma(n1, n2) {
    return suma= parseInt(n1) + parseInt(n2);
}

function resta(n1, n2) {
    return resta= parseInt(n1) - parseInt(n2);
}

function multiplicacion(n1, n2) {
    return multiplicacion = parseInt(n1) * parseInt(n2);
}

function division(n1, n2) {
    return division = parseInt(n1) / parseInt(n2);
}

function modulo(n1, n2) {
    return modulo= parseInt(n1) % parseInt(n2); //Devuelve el resto de una división
}

while(true){ //bucle para que el usuario siga accediendo a las funciones
    let opcion = parseInt (prompt(`Elige la opción que desees:)
        1. Suma
        2. Resta
        3. Multiplicación
        4. División
        5. Módulo
        6. Salir `));
    
    if (opcion == 6) { //El bucle se cierra solo si el usuario elige salir
        alert("Regresa pronto. Adiós!");
        break;
    }

    let numero1 = prompt ("Ingresa un número 1: ");
    let numero2 = prompt ("Ingresa un número 2: ");
    
    switch (opcion) {
        case 1:
            console.log(`La suma es: ${suma(numero1, numero2)}`);
            break;
        case 2:
            console.log(`La resta es: ${resta(numero1, numero2)}`);
            break;
        case 3:
            console.log(`La multiplicación es: ${multiplicacion(numero1, numero2)}`);
            break;
        case 4:
            console.log(`La división es: ${division(numero1, numero2)}`);
        break;
        case 5:
            console.log(`El módulo es: ${modulo(numero1, numero2)}`);
        break;
        default:
            console.log("ERROR");
            break;
    }
}