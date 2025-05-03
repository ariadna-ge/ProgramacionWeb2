//Importar express
const express = require('express');

//Creación de una instancia
const app = express();

//Definir el puerto
const port = 7008;

//Configuración de ruta get para la raíz ('/')
app.get('/', (req, res) => {
    const a = 5;
    const b = 3;
    const resultado = a + b;
    res.send(`La suma de ${a} + ${b} es: ${resultado}`);
});

//Escuchar el puerto
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
