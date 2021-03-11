const path = require("path");
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const authenticate = require("./middlewares/authenticate");

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
app.use(session({ secret: "secreto Cala" }));
app.use(cookieParser());

app.locals.user = null;
app.use(authenticate);

const mainRouter = require(__dirname + "/routes/main-routes");
app.use("/", mainRouter);

const usersRouter = require(__dirname + "/routes/users-routes");
app.use("/", usersRouter);

const productsRouter = require(__dirname + "/routes/products-routes");
app.use("/products", productsRouter);

const apiUsersRouter = require("./routes/api/users-routes");
app.use("/api/users", apiUsersRouter);

const apiProductsRouter = require("./routes/api/products-routes");
app.use("/api/products", apiProductsRouter);

app.use((req, res, next) => {
  res.status(404).render("not-found");
});
