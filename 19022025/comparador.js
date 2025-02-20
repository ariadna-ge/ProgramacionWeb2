let numero1 = prompt("Ingresa un primer número");
let numero2 = prompt("Ingresa un segundo número");
let numero3 = prompt("Ingresa un tercer número");

//La función Math.min() devuelve el menor de cero o más números.
// La función Math.max() retorna el mayor de cero o más números.
menor= Math.min(numero1, numero2, numero3);
mayor= Math.max(numero1, numero2, numero3);

if (numero1 == numero2 && numero2 == numero3) {
    console.log("Los tres números son iguales");
} else if (numero1 == numero2 || numero1 == numero3 || numero2 == numero3) {
    console.log("Hay dos números iguales, y el número es: " +(numero1 || numero2 || numero3));
    console.log("El número más pequeño es: " + menor);
    console.log("El número más grande es: " + mayor);
} else {
    console.log("El número más pequeño es: " + menor);
    console.log("El número más grande es: " + mayor);
}