const path = require("path");
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const bcrypt = require("bcrypt");
const mainRouter = require(__dirname + "/routes/main-routes");
const productsRouter = require(__dirname + "/routes/products-routes");
const pathAPublic = path.resolve(__dirname, "public");
const enrutadorEstaticos = express.static(pathAPublic);
app.use(enrutadorEstaticos);

app.set("view engine", "ejs");
app.set(("views", __dirname + "/views"));

app.listen(3001, () => {
  console.log("Servidor funcionando");
});

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", mainRouter);

app.use("/products", productsRouter);
app.use((req, res, next) => {
  res.status(404).render("not-found");
});
