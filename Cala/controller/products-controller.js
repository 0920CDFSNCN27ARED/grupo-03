const path = require("path");


const fs = require("fs");
function getProducts() {
  const dbJson = fs.readFileSync(__dirname + "/../product-db.json", {
    encoding: "utf-8",
  });
  return JSON.parse(dbJson);
}

const controller = {
  
  products: (req, res) => {
    const products = getProducts();
    
    res.render("products", { products: products});
  
  },

  details: function (req, res) {
    const products = getProducts();
    let i = products.findIndex((prod) => {
      return prod.id == req.params.id;
    });

    res.render("details", { product: products[i] });
  },

  showEdit: (req, res) => {
    const products = getProducts();
    const i = products.findIndex((prod) => {
        return prod.id == req.params.id;
    });
    if (i == null) {
        return res
            .status(404)
            .send("404 not found. <br> ¡Lo siento, no tenemos ese producto!");
    }
    res.render("edit", {
        product: products[i],
    });
},

edit: (req, res) => {
  const message = "Product Edited: " + JSON.stringify(req.body);
  res.send(message);
},
};

module.exports = controller;
