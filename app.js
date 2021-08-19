// Requerimos express
const express = require('express');
// Requerimos Path
const path = require('path');



// Ejecuta express
const app = express();

// Usando Recursos Estaticos
app.use(express.static('public'));



// Rutas a los Recuros //
app.get('/', (req, res)=>{
    res.sendFile(path.resolve('./views/index.html'));
});

app.get('/login', (req, res)=>{
    res.sendFile(path.resolve('./views/login.html'));
});

app.get('/register', (req, res)=>{
    res.sendFile(path.resolve('./views/register.html'));
});

app.get('/productCart', (req, res)=>{
    res.sendFile(path.resolve('./views/productCart.html'));
});

app.get('/productDetail', (req, res)=>{
    res.sendFile(path.resolve('./views/productDetail.html'));
});



// Levanta el servidor de express
app.listen(3000, ()=>{
    console.log('Server Running at port 3000');
});