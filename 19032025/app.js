// La variable declarada dentro del if reemplaza a la variable declarada fuera
var estado= true;
if(estado){
    var estado=false;
    //console.log(estado);
}
console.log(estado);


// La variable declarada dentro del if es diferente de la declarada fuera
let estado = true;
if (estado) {
    let estado = false;
    console.log(estado);
}
console.log(estado);

// Una vez que se asigna un valor a una variable const, no se puede cambiar.
const estado = true;
estado = false;

// Assignment to constant variable.
for (const index = 0; index < 10; index++) {
    console.log(index);
}

// Dos variables son distintas, a pesar de tener el mismo nombre
const estado = true;
if (estado) {
    const estado = false;
    console.log(estado);
}
console.log(estado);

// no es permitido
const miArray = []; 
miArray = ["nuevoElemento"];

// si es permitido
const newArray = []; 
newArray[0] = ["nuevoElemento"];
console.log(newArray);