/* // interpolacion de un string 

let nombre = "Ariadna";
console.log("\n Tu nombre es: \n" +nombre);
console.log(` Tu nombre es: 
    ${nombre}
    Hola
    `);

console.log(`Tu nombre es: ${nombre.toUpperCase()}`);

 */

// operador ternario, parecido a un if para evaluar si es verdadero o falso
/* let nombre = "Ariadna";
let estado = false;
console.log(`
    ${estado ? 'Bienvenido!: ': 'Adios!: '}${nombre}
    `);
 */

    // Declaracion global
var nombre = "Ariadna";
console.log(nombre);

var nombre = 18;
console.log(nombre);

let dato =15;
    dato= 18;

    // acesibilidad dentro del código
var estado = false;
if (estado) {
    var estado = true;
}
console.log(estado);

    // valida, pero no imprime, let esta encapsulado
let estado2 = true;
if (estado2) {
    let estado2 = false;
}
console.log(estado2);