const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
//const { use } = require('react');
const app = express();

//manejo de peticion por medio de req
app.use(bodyParser.urlencoded({extended:false}));

///Configuración de plantilla
app.set('view engine', 'ejs');

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
    console.log(`http://127.0.0.1:${port}`);
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
            res.send('Error, no se recuperan los datos de la db');
        }else{
            res.render('index', {users: results});
        }
    });
});

//modulo para agregar un usuario
app.post('/add', (req,res)=>{
    const {name, email} = req.body;
    const insertarRegistro = 'INSERT INTO users (name, email) VALUES (?,?)';
    db.query(insertarRegistro, [name, email], (err) => {
        if (err) {
            console.log('Error al agregar usuario', err);
            res.send('Error');
        }else{
            res.redirect('/');
        }
    });
});

//modulo para editar usuario
app.get('/edit/:id',(req,res)=>{
    const{id}= req.params;
    const buscarUsuarioID = 'SELECT * FROM users WHERE id = ?';
    db.query(buscarUsuarioID,[id],(err,results)=>{
        if(err){
            console.log("Error en la DB", err);
        }else{
            res.render('edit',{user:results[0]});
        }
    });

});

//actualizar
app.post('/update/:id',(req,res)=>{
    const {id} = req.params;
    const {name,email}=req.body;

    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(query,[name,email,id],(err)=>{
        if(err){
            console.error("Error", err);
        }else{
            res.redirect('/');
        }
    });
});

//eliminar
app.get('/delete/:id',(req,res)=>{
    const {id} = req.params;
    const eliminarUsuarioId = 'DELETE FROM users WHERE id= ?';

    db.query(eliminarUsuarioId,[id], (err)=>{
        if (err) {
            console.error('Errror al eliminar en la bd');
            res.send('Error en la BD');
        }else{
            res.redirect('/');
        }
    });
});

// Estructura de rutas 1. DB, 2. Lista de negocio, 3. Public con CSS, IMG, View, APP