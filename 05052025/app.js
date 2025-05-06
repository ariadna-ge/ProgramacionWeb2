// Importar express
const express = require('express');

// Creación de una instancia, utilizar todos los métodos, utilizar las funcionalidades que requiero
const app = express();

// Definir el puerto
const port = 5623;

// Configuración de ruta por el método GET para la raíz 
app.get('/', (req, res) => {
    res.send('Hola mundo');
    //res.sendFile("c:/Users/Denisse/Documents/PROGRAMACION WEB 2/ProgramacionWeb2/05052025/index.html");
});

// Iniciar el servidor
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
});

