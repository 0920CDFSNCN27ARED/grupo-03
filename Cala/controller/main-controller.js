const path = require("path");

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
