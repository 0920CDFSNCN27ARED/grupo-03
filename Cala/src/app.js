const path = require("path");
const express = require('express');
const app = express();

const pathALaCarpetaPublic = path.resolve(__dirname, "../public");
const enrutadorDeExpressParaArchivosEstaticos = express.estatic(
  pathALaCarpetaPublic
);
app.use(enrutadorDeExpressParaArchivosEstaticos);

app.listen(3001, ()=>{
    console.log('Servidor funcionando');
});

app.all('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../views/index.html'));

});
app.all('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../views/login.html'));
});

app.all('/products', (req,res)=>{
    res.sendFile(path.resolve(__dirname + '../views/products.html'));
});

app.all('/cart', (req,res)=>{
    res.sendFile(path.resolve(__dirname + '../views/cart.html'));
});
