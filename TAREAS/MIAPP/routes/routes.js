const express = require('express');
const path = require('path');
const router = express.Router(); 


// Ruta principal
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/nosotros.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/nosotros.html"));
});

router.get("/registro.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/registro.html"));
});

router.get("/productos.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/productos.html"));
});

module.exports = router; 