const path = require("path");
const express = require("express");
const app = express();

const mainRouter = require(__dirname + "/routes/main-routes");
const productsRouter = require(__dirname + "/routes/products-routes");
const pathAPublic = path.resolve(__dirname, "public");
const enrutadorEstaticos = express.static(pathAPublic);
app.use(enrutadorEstaticos);

app.listen(3001, () => {
  console.log("Servidor funcionando");
});

app.use("/", mainRouter);

//app.all("/products",productsRouter  );

app.all("/details", productsRouter);

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
