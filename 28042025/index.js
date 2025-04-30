//importamos el modulo HTTP que viene incluido en Node.js
const serverHTTP = require('http');

//definimos el puerto de salida del servidor
const port= 3029;

// enviamos informacion hacía el servidor
// crear ServidorNodeImportado
const server = serverHTTP.createServer((req,res)=>{
    //establecer el encabezado de respuesta, 200 información de forma correcta (respuesta satisfactoria)
    res.writeHead(200, {'Content-Type':'text/plain'});
    // enviamos la puerta 
    res.end('Hola desde un server de Node con el modulo http de node');
});  


// escuchar el puerto 
server.listen(port, ()=> {
    console.log(`Servidor ejecutandose por medio de http://localhost:${port}`);
})