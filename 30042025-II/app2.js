//Importar express
const express = require('express');

//Creación de una instancia
const app = express();

//Definir el puerto
const port = 3009;

//Configuración de ruta get para la raíz ('/')
app.get('/', (req, res) => {
    res.send(`Hola mundo desde el puerto ${port}`);
});

//Escuchar el puerto
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
