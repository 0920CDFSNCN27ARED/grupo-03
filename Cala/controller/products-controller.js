const path = require("path");

const fs = require("fs");
function getProducts() {
  const dbJson = fs.readFileSync(__dirname + "/../product-db.json", {
    encoding: "utf-8",
  });
  return JSON.parse(dbJson);
}

const controller = {
  //products: (req, res) => {
  //  res.render("products"));
  //},

  details: function (req, res) {
    const products = getProducts();
    let i = products.findIndex((prod) => {
      return prod.id == req.params.id;
    });

    res.render("details", { product: products[i] });
  },
};

module.exports = controller;
