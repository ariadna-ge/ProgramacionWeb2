// Importar express
const express = require('express');

// Creación de una instancia, utilizar todos los métodos, utilizar las funcionalidades que requiero
const app = express();

// Definir el puerto
const port = 5009;

// Configuración de ruta por el método GET para la raíz 
app.get('/', (req, res) => {
    res.send('Hola mundo');
});

// Iniciar el servidor
app.listen(port);
