let numeroUsuario = prompt("Ingresa un numero del 1 al 10");
console.log(numeroUsuario + "Es: " + typeof numeroUsuario);
    
    //USP DE IF 
if (numeroUsuario <=10){
    //Sentencia true
    console.log("Genial")
}else{
    //Sentencia false
    console.log("Muy mal")
}

//== no le interesa el tipo de dato
//=== compara los datos correctamente, si el dato corresponde

let numero = prompt("Ingresa un numero");
if (numero == 10){
    console.log("Numero correcto y de tipo " +typeof numero)
} 

let dato = prompt("Ingresa un dato");
if (dato === 10){
    console.log("Dato correcto y de tipo " +typeof dato)
} else {
    console.log("Error porque el tipo de datos es: "+typeof dato)
}


let numero1 = prompt("Ingresa un número");
let numero2 = prompt("Ingresa un número");
if (numero1 < numero2){
    console.log("El primer dato " +numero1 + " es menor que el segundo dato " +numero2)
} else if (numero1 == numero2){
    console.log("Los numeros son iguales")
} else {
    console.log("El primer dato " +numero1 + " es mayor que el segundo dato " +numero2)
}

    // USO DE SWITCH
let opcionUser = prompt(`
        Elija una opción 
        1.- Libros 
        2.- Peliculas 
        3.- Juegos`);

switch (opcionUser) {
    case "1":
        console.log("Principito");
        break;
    case "2":
        console.log("Matrix");
        break; //detener el bloc y no moverlo
    case "3":
        console.log("AOE")
        break;
    default:
        console.log("No corresponde")
        break;
}


    //USO DE WHILE
let dato2 = 1;
while (dato2 <= 10) {
    console.log(dato2);
    // numero = numero +1;
    dato2++;
}

let dato1 = 0;
while (dato1 <= 10) {
    console.log("3x"+dato1+"="+3*dato1);
    // numero = numero +1;
    dato1++;
}

