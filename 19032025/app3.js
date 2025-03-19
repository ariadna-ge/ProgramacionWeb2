//Constructor de objetos
/* var miCarro = new Object();
    miCarro.marca= 'Ford';
    miCarro.modelo='Fiesta';
    miCarro.año = 2013; */

//Notación literal de objeto
/* var miCarro ={
    marca: 'Ford',
    modelo: 'IKON',
    año: 2013,
    color: 'azul'
};
console.log(miCarro.color); */

const gato = {
    nombre: 'Wilson',
    duerme: true,
    edad: 6,
    enemigos:["Solovino","Palomas"]
}
gato.color='negro';
console.log(gato.nombre);
console.log(gato.enemigos[1]);
console.log(gato.color);

gato.edad=7;
console.log(gato.edad);

console.log(gato['nombre']);
console.log(gato);
delete gato.duerme;
console.log(gato);