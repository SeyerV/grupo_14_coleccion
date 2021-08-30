// Requerimos express
const express = require('express');
// Ejecuta express
const app = express();
// Requerimos Path
const path = require('path');
const mainRouter = require('./routes/mainRouter');



// Usando Recursos Estaticos
app.use(express.static('public'));



// Rutas a los Recuros //
app.get('/', (req, res)=>{
    res.render('index')
});


app.get('/login', (req, res)=>{
    res.render('login')
});

app.get('/register', (req, res)=>{
    res.render('register')
});

app.get('/productCart', (req, res)=>{
    res.render('productCart')
});

app.get('/productDetail', (req, res)=>{
    res.render('productDetail')
});

app.get('*', (req, res)=>{
    res.status(404).send('<h1>404 Not Found</h1>');
});


// View engine setup
/*app.set('views', path.join(__dirname, './views'));
*/
app.set('view engine', 'ejs');
//Rutas
/*Rutas parametrizadas

app.use('/', mainRouter);
*/
// Levanta el servidor de express


app.listen(3000, ()=>{
    console.log('Server Running at port 3000');
});