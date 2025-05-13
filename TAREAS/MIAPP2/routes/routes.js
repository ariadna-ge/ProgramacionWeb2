const express = require('express');
const path = require('path');
const router = express.Router(); 


// Ruta principal
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/calculadora.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/calculadora.html"));
});

router.get("/generadorQR.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/generadorQR.html"));
});

module.exports = router; 