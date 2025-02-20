//COMPARADOR HACIENDO USO DE MATH.MIN Y MATH.MAX
//La función Math.min() devuelve el menor de cero o más números.
// La función Math.max() retorna el mayor de cero o más números.

/* let numero1 = prompt("Ingresa un primer número");
let numero2 = prompt("Ingresa un segundo número");
let numero3 = prompt("Ingresa un tercer número"); 
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
 */

//COMPARADOR SIN EL USO DE MATH.MIN Y MATH.MAX
let numero1 = parseInt(prompt("Ingresa un primer número"));
let numero2 = parseInt(prompt("Ingresa un segundo número"));
let numero3 = parseInt(prompt("Ingresa un tercer número"));

menor= numero_menor(numero1, numero2, numero3);
mayor= numero_mayor(numero1, numero2, numero3);

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

function numero_menor(numero1, numero2, numero3) {
    let menor = numero1;
    if (numero2 < menor) {
      menor = numero2;
    }
    if (numero3 < menor) {
      menor = numero3;
    }
    return menor;
  }

function numero_mayor(numero1, numero2, numero3) {
    let mayor = numero1;
    if (numero2 > mayor) {
      mayor = numero2;
    }
    if (numero3 > mayor) {
      mayor = numero3;
    }
    return mayor;
  }