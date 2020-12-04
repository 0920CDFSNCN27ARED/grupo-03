const path = require("path");

const fs = require("fs");
function getProducts() {
  const dbJson = fs.readFileSync(__dirname + "/../product-db.json");
  return JSON.parse(dbJson);
}

const controller = {
  home: function (req, res) {
    res.render("index");
  },

  login: (req, res) => {
    res.render("login");
  },
  cart: (req, res) => {
    res.render("cart");
  },
};

module.exports = controller;
