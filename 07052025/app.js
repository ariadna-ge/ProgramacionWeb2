const express = require('express');

const path = require('path'); // <- CORREGIDO
const routes = require('./routes/routes'); // <- CORREGIDO

const app = express();
const port = 3089;

// Middleware para servir los archivos estáticos (css, imágenes, pdf, etc.)
app.use(express.static(path.join(__dirname, "public")));

app.use('/', routes);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
