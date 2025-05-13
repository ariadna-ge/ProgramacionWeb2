const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const { use } = require('react');
const app = express();

//manejo de peticion por medio de req
app.use(bodyParser.urlencoded({extended:false}));

///Configuración de plantilla
app.set/('view engine', 'ejs');

//conexión de la base de datos
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'taeMoon04',
    database: 'node_crud',
    port: 3306
});

//validacion de base de datos
db.connect(err =>{
    if (err) {
        console.error('Error en la base de datos', err);
    }else{
        console.log('Conexión realizada de forma correcta ');
    }
});

//inicio del server
const port = 3008;
app.listen(port, ()=>{
    console.log(`http://127.0.0.1${port}`);
});

//mostrar lista de usuarios
app.get('/',(req,res)=>{
    //consulta a la base de datos
    const consultaDB =  'SELECT * FROM users';
    //trabajamos con la conexión
    db.query(consultaDB, (err, results)=>{
        if (err) {
            //no se encontro el usuario, o hay un error para el desarrollador
            console.log('Error al recuperar el ususario', err); 
            //mostrar la información al usuario
            res.send('Error, no se recuperan los datos de la db')
        }else{
            res.render('index', {users: results});
        }
    });
});

//modulo para agregar un usuario
app.post('/add', (req,res)=>{
    const {name, email} = req.body;
    /*
    Nombre: Ariadna
    Correo: ariadnagarcia175@aragon.unam.mx
    */
    const query = 'INSERT INTO users (name, email) VALUES (?,?)';
    db.query(insertarRegistro, [name, email], (err) =>{
        if (err) {
            console.log('Error al agregar usuario', err);
            res.send('Error');
        }else{
            res.redirect('/');
        }
    });
});