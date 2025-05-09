const express = require('express');
const path = require('path');

const router = express.Router(); 

// Ruta principal
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});


router.get("/registro.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/registro.html"));
});

module.exports = router; 


// 3 rutas para el archivo 
// //pagina principal, para generar calculador y qr, redirige a la pagina principal, inicio, calculadora, y qr, con el puerto