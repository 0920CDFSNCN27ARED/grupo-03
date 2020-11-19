const path = require("path");
const express = require("express");
const app = express();

const pathALaCarpetaPublic = path.resolve(__dirname, "../public");
const enrutadorDeExpressParaArchivosEstaticos = express.static(
  pathALaCarpetaPublic
);
app.use(enrutadorDeExpressParaArchivosEstaticos);

app.listen(3001, () => {
  console.log("Servidor funcionando");
});

app.all("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/index.html"));
});
app.all("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/login.html"));
});

//app.all("/products", (req, res) => {
//  res.sendFile(path.resolve(__dirname, "../views/products.html"));
//});

app.all("/cart", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/cart.html"));
});

app.all("/details", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/details.html"));
});

//app.all("/about", (req, res) => {
//  res.sendFile(path.resolve(__dirname, "../views/about.html"));
//});

//app.all("/contact", (req, res) => {
//  res.sendFile(path.resolve(__dirname, "../views/contact.html"));
//});

//app.all("/info", (req, res) => {
//  res.sendFile(path.resolve(__dirname, "../views/info.html"));
//});

//app.all("/faq", (req, res) => {
//  res.sendFile(path.resolve(__dirname, "../views/faq.html"));
//});
