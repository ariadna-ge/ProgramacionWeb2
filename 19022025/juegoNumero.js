//retorna un punto flotante, un numero aleatorio 

let numeroMaquina = Math.floor(Math.random()*(10-1)+1);
console.log(numeroMaquina);

let opcionUser = prompt(`
    Elige un número aleatorio del 1 al 10
    ¡SOLO CUENTAS CON 5 VIDAS!
    `);

let vidas = 5;
while ( numeroMaquina != opcionUser && vidas > 1) {
    vidas --;
    opcionUser = parseInt(prompt( "Te quedan " + vidas + " vidas"));
}


if (opcionUser == numeroMaquina){
    alert("¡ACERTASTE!, el número es correcto");
} else if (numeroMaquina < opcionUser){
    alert("¡PERDISTE!, el número era menor, es: " +numeroMaquina + " y tú indicaste el número: " + opcionUser);
} else{
    alert("¡PERDISTE!, el número era mayor, es: " +numeroMaquina + " y tú indicaste el número: " + opcionUser);
}