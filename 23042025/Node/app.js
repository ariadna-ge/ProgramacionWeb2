//importamos el modulo HTTP que viene incluido en Node.js
const PaqueteServidorNodeImportado = require('http');

//definimos el puerto de salida del servidor
const port= 3005;

// crear ServidorNodeImportado
const server = PaqueteServidorNodeImportado.createServer((req,res)=>{
    //establecer el encabezado de respuesta 
    res.writeHead(200, {'Content-Type':'text/plain'});
    
    // enviamos la puerta 
    res.end('Hola mundo');
});  


// escuchar el puerto 
server.listen(port, ()=> {
    console.log(`Servidor ejecutandose por medio de http://localhost:${port}`);
})