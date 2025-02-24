/* 

console.log(frutas);
console.log(frutas.length);
console.log(frutas[1]);
console.log(frutas[3]); 

for (let i = 0; i < 10; i++) {
    console.log("Hola"+i);
}*/

/* for (let j = 0; j <= 3; j++) {
    console.log(frutas[j]);
    console.log(j);   
}
 */

/* 
for (let j = 0; j<frutas.length; j++) {
    console.log(frutas[j]);
    console.log(j);   
} */
let fruta = ["mango", "palta", "manzana", "platano", "fresa"];
for (let frutas of fruta) {
    console.log(frutas);
}
for (let frutas in fruta) {
   console.log(frutas);
}