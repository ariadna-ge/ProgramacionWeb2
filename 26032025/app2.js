/* //función declarativa
function numeroAleatorio(min, max) {
    return Math.floor(Math.random()*(max-min) + min);
}

//invocar la función
console.log(numeroAleatorio(1,11));

//función expresada
const miNumero = function numeroAleatorio(min, max) {
    return Math.floor(Math.random()*(max - min) + min);
}
console.log(miNumero(10,35));

//función flecha
function datos(a) {
    return a + 100;
}

var datos = function (a) {
    return a + 100;
}

var datos = a => a + 100; //especie de polimorfismo

let numeroAleatorioFlecha = (min, max) => Math.floor(Math.random()*(max - min) + min);
 */

//función flecha con forEach
/* const array1 = ['a','b','c','d'];
array1.forEach(element => console.log(element)); */

/* array.forEach(function callcack(currentValue, index, array|)) {
    //iterador
} */

let frutas = ["manzana", "sandía", "pera", "naranja"];
//frutas.forEach(fruta => console.log(element));
frutas.forEach((fruta, index, array) => {
    console.log(index);
    console.log(fruta);
    console.log(array);
    
});