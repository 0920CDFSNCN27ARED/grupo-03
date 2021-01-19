const path = require("path");
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const bcrypt = require("bcrypt");
const session = require("express-session");
const authenticate = require("./middlewares/authenticate");

const pathAPublic = path.resolve(__dirname, "public");
const enrutadorEstaticos = express.static(pathAPublic);
app.use(enrutadorEstaticos);
//para subida de archivos
const multer = require("multer");

app.set("view engine", "ejs");
app.set(("views", __dirname + "/views"));

app.listen(3001, () => {
  console.log("Servidor funcionando");
});

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: "secreto Cala" }));

app.locals.user = null;
app.use(authenticate);

const mainRouter = require(__dirname + "/routes/main-routes");
app.use("/", mainRouter);

const usersRouter = require(__dirname + "/routes/users-routes");
app.use("/", usersRouter);

const productsRouter = require(__dirname + "/routes/products-routes");
app.use("/products", productsRouter);

app.use((req, res, next) => {
  res.status(404).render("not-found");
});
