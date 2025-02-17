/* if (condition) {
    bloque en caso de ser TRUE
}
---> continua
if (condition) {
    bloque en caso de ser true
} else{
    bloque en el caso de ser false
}
 --> continua */

 let texto = prompt("Escribe tu carrera");
    
if (texto == "ICO") {
    console.log("Tu carrera es correcta");
} else {
    console.log("Incorrecto");
}