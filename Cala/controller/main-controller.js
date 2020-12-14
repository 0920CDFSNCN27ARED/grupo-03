const path = require("path");
const bcrypt = require("bcrypt");
const fs = require("fs");
function getProducts() {
  const dbJson = fs.readFileSync(__dirname + "/../product-db.json");
  return JSON.parse(dbJson);
}

function getUsers() {
  const usersJson = fs.readFileSync(__dirname + "/../allUsers.json");
  return JSON.parse(usersJson);
}

const controller = {
  home: function (req, res) {
    const products = getProducts();

    res.render("index", { products: products });
  },

  login: (req, res) => {
    res.render("login");
  },
  autLogin: (req, res) => {
    res.send("logueado");
    // const users = getUsers();

    //for (let i = 0; i < users.length; i++) {
    // if (
    //  users[i].user == req.body.user &&
    // bcrypt.compareSync(req.body.password, users[i].password)
    // ) {
    //  res.send("te logueaste");
    //} else {
    // res.send("error");
    //}
    // }
  },
  register: (req, res) => {
    res.render("register");
  },
  autRegister: (req, res) => {
    res.send("registrado");
    //let newUser = {
    // name: req.body.name,
    // user: req.body.user,
    //mail: req.body.email,
    // password: bcrypt.hashSync(req.body.password, 10),
    // };

    //console.log(newUser);

    //    let exist = fs.existsSync("allUsers.json", (exist) => {
    //    return exist;
    // });

    //if (exist) {
    //let users = getUsers();
    //users.push(newUser);
    //let usersJson = JSON.stringify(users);
    //fs.writeFileSync("allUsers.json", usersJson);
    //} else {
    // let usersArray = [];
    //usersArray.push(newUser);
    //let usersArrayJson = JSON.stringify(usersArray);
    //fs.writeFileSync("allUsers.json", usersArrayJson);
    // }
    //res.redirect("/");
  },
  cart: (req, res) => {
    res.render("cart");
  },
};

module.exports = controller;
