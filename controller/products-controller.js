const path = require("path");

const fs = require("fs");

const { stringify } = require("querystring");
const getProducts = require("../utils/get-products");
const saveProducts = require("../utils/save-products");

const controller = {
  products: (req, res) => {
    const products = getProducts();

    res.render("products/products", { products: products });
  },

  details: function (req, res) {
    const products = getProducts();
    let i = products.findIndex((prod) => {
      return prod.id == req.params.id;
    });

    res.render("products/details", { product: products[i] });
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
    res.render("products/edit", {
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

    const filename = req.file ? req.file.filename : productEdit.image;

    productEdit.name = req.body.name;
    productEdit.price = req.body.price;
    productEdit.discount = req.body.discount;
    productEdit.category = req.body.category;
    productEdit.description = req.body.description;
    productEdit.image = filename;
    productEdit.color = req.body.color;

    saveProducts(products);

    res.redirect("/products");
  },

  showCreate: (req, res) => {
    res.render("products/create");
  },

  create: (req, res) => {
    const products = getProducts();
    //let Idmayor = products[0].id;
    //for (let i = 0; i < products.length; i++) {
    //  if (products[i].id > Idmayor) {
    //    Idmayor = products[i].id;
    //  }
    //}

    //products[products.length-1].id

    const productCreate = {
      id: products[products.length - 1].id + 1,
      //Idmayor + 1,

      ...req.body,
      image: req.file.filename,
    };

    products.push(productCreate);
    saveProducts(products);

    res.redirect("/products");
  },

  delete: (req, res) => {
    let products = getProducts();
    let productDelete = products.filter((product) => {
      return product.id == req.params.id;
    });
    let productsDeleted = productDelete;
    productsDeletedJson = JSON.stringify(productsDeleted, null, 4);
    fs.writeFileSync("data/product-deleted.json", productsDeletedJson);

    let productList = products.filter((product) => {
      return product.id != req.params.id;
    });
    products = productList;
    productsJson = JSON.stringify(products, null, 4);
    fs.writeFileSync("data/product-database.json", productsJson);

    res.redirect("/products");
  },
};

module.exports = controller;
