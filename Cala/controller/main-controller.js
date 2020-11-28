const path = require("path");

const controller = {
  home: function (req, res) {
    res.sendFile(path.resolve(__dirname, "../views/index.html"));
  },

  login: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/login.html"));
  },
  cart: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/cart.html"));
  },
};

module.exports = controller;
