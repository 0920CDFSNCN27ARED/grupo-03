const path = require("path");

const controller = {
  //products: (req, res) => {
  //  res.sendFile(path.resolve(__dirname, "../views/products.html"));
  //},

  details: function (req, res) {
    res.sendFile(path.resolve(__dirname, "../views/details.html"));
  },
};

module.exports = controller;
