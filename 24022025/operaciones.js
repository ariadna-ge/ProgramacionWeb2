let opcion = parseInt (prompt(`
    Operación:
    1. Suma
    2. Resta
    3. Multiplicación`));

// suma, resta, multiplicacion, y division
let numero1 = prompt ("Ingresa un numero 1: ");
let numero2 = prompt ("Ingresa un numero 2: ");


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
    return modulo= parseInt(n1) % parseInt(n2);
}

switch (opcion) {
    case 1:
        console.log(`La suma es: ${suma(numero1, numero2)}`);
        break;
    case 2:
        console.log(`La resta es: ${resta(numero1, numero2)}`);
        break;
    case 3:
        console.log(`La multiplicaion es: ${multiplicacion(numero1, numero2)}`);
        break;
    case 4:
        console.log(`La division es: ${division(numero1, numero2)}`);
    break;
    case 5:
        console.log(`La modulo es: ${modulo(numero1, numero2)}`);
    break;
    default:
        console.log("Error");
        break;
}



