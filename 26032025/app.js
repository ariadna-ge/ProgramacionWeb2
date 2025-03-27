//Ejemplos de un carrito de compra para frutas
const frutas=[];

const fruta = prompt("¿Qué fruta deseas agregar a tú carrito?");

frutas.push(fruta);

while(confirm("¿Quieres agregar otra fruta?")){
    const fruta= prompt ("Agregar otra Fruta");
    frutas.push(fruta);
}

alert("En tu carrito de compra tienes lo siguiente: " + carrito());

function carrito() {
    let contenidoCarrito = "";
    for (let fruta of frutas) {
      contenidoCarrito += fruta + ", ";
    }
    return contenidoCarrito;
  }