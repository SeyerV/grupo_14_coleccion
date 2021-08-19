// Requiere express
const express = require('express');

// Ejecuta express
const app = express();

// Levanta el servidor de express
app.listen(3000, ()=>{
    console.log('Server Running at port 3000');
});