const path = require("path");
const bcrypt = require("bcrypt");
const fs = require("fs");
function getProducts() {
  const dbJson = fs.readFileSync(__dirname + "/../data/product-database.json");
  return JSON.parse(dbJson);
}

function getUsers() {
  const usersJson = fs.readFileSync(__dirname + "/../data/allUsers.json");
  return JSON.parse(usersJson);
}

const controller = {
  home: function (req, res) {
    const products = getProducts();

    res.render("index", { products: products });
  },

  cart: (req, res) => {
    res.render("cart");
  },
  //purchaseCart:(req, res)=>{
  //let products = getProducts();
  //const i = products.findIndex((prod) => {
  //return prod.id == req.params.id;
  //});

  // }
};

module.exports = controller;
