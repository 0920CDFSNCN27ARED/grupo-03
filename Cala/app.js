const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3001, ()=>{
    console.log('Servidor funcionando');
});

app.all('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});
app.all('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.all('/products', (req,res)=>{
    res.sendFile(__dirname + '/views/products.html');
});

app.all('/cart', (req,res)=>{
    res.sendFile(__dirname + '/views/cart.html');
});
