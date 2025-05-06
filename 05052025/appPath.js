const express = require('express');
const path = require('path');

const app = express();
const port = 3089;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Escuchando en: http://127.0.0.1:${port}`);
});
