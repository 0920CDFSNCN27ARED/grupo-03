const path = require("path");

const fs = require("fs");

const { stringify } = require("querystring"); //explicame esto después que no lo entiendo//
function getProducts() {
  const dbJson = fs.readFileSync(__dirname + "/../product-db.json", {
    encoding: "utf-8",
  });
  return JSON.parse(dbJson);
}

const controller = {
  products: (req, res) => {
    const products = getProducts();

    res.render("products", { products: products });
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
    //const products = getProducts();
    
   // for (  const productEdit of products) {
     // if (products.id == req.params.id) {
      //products.name = req.body.name,
      //products.price = req.body.price,
     // products.discount = req.body.discount,
     // products.category = req.body.category,
     // products.description = req.body.description
     // };

     
   
  
    },

  showCreate: (req, res) => {
    res.render("create");
  },

  create: (req, res) => {
    const message = "Producto Creado: " + JSON.stringify(req.body);
    res.send(message);
     // const productCreate={
      //name : req.body.name,
      //price : req.body.price,
      //discount : req.body.discount,
      //category : req.body.category,
      //description : req.body.description
      //};

     //const archivoProducto = fs.readFileSync("product-db.json", {encoding: "utf-8"});
     //const productCreate= JSON.parse(archivoProducto);
     //const productCreateJson = JSON.stringify(productCreate);
     //fs.appendFileSync("product-db.json",productCreateJson);
    
     //res.redirect("/");
  },
};

module.exports = controller;
