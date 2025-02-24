saluda();
function saluda() {
    console.log("Hola mundo");
}

//función con argumento
function despedida(nombre) {
    console.log("Adios " + nombre);
}
despedida("Ariadna");

function operacion(numero) {
    let a = 56;
    let b = 89.23;
    let calculo = (numero*a)/b;
    return console.log(calculo);
    ;
}
operacion(8);

function suma(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}

let numero1 = prompt ("Ingresa un numero 1: ");
let numero2 = prompt ("Ingresa un numero 2: ");

let resultado = suma (numero1, numero2)
console.log("El total es: " + resultado);
