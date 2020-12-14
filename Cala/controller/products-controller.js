const path = require("path");

const fs = require("fs");

const { stringify } = require("querystring"); 
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
    const products = getProducts();
    let productEdit = {};

    for (let i = 0; i < products.length; i++) {
      if (req.params.id == products[i].id) {
        productEdit = products[i];
      }
    }
      productEdit.name = req.body.name;
      productEdit.price = req.body.price;
      productEdit.discount = req.body.discount;
      productEdit.category = req.body.category;
      productEdit.description = req.body.description;

    const prodJson = JSON.stringify(products);
    fs.writeFileSync("product-db.json", prodJson);

    getProducts();
    res.redirect("/products");
  },

  showCreate: (req, res) => {
    res.render("create");
  },

  create: (req, res) => {
    const products = getProducts();
    let Idmayor = products[0].id;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id > Idmayor) {
        Idmayor = products[i].id;
      }
    }

    const productCreate = {
      id: Idmayor + 1,
      name: req.body.name,
      price: req.body.price,
      discount: req.body.discount,
      category: req.body.category,
      description: req.body.description,
    };

    archivoProducto = fs.readFileSync("product-db.json", {
      encoding: "utf-8",
    });
    const productsFile = JSON.parse(archivoProducto);

    productsFile.push(productCreate);
    const productsJson = JSON.stringify(productsFile);
    fs.writeFileSync("product-db.json", productsJson);
    

    res.redirect("/");
  },

  delete: (req, res) => {
    let products = getProducts();
    let productDelete = products.filter((product) => {
      return product.id == req.params.id;
    });
    let productsDeleted = productDelete;
    productsDeletedJson = JSON.stringify(productsDeleted);
    fs.writeFileSync("product-deleted.json", productsDeletedJson);

    let productList = products.filter((product) => {
      return product.id != req.params.id;
    });
    products = productList;
    productsJson = JSON.stringify(products);
    fs.writeFileSync("product-db.json", productsJson);

    
    res.redirect("/");
  },
};

module.exports = controller;
