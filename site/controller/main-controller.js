const path = require("path");
const bcrypt = require("bcrypt");
const fs = require("fs");

const productService = require("../services/productService");

const controller = {
  home: async (req, res) => {
    // const user = await userService.findOne();
    const products = await productService.findAll();

    res.render("index", { products: products });
  },

  cart: (req, res) => {
    res.render("cart");
  },
  search: async (req, res) => {
    const products = await productService.findAll();
    const productsSearch = [];
    const querys = req.query.searchquery.split(" ");
    console.log(querys);

    products.forEach((product) => {
      querys.forEach((query) => {
        if (product.name.toUpperCase().includes(query.toUpperCase())) {
          productsSearch.push(product);
        }
      });
    });
    const page = undefined;
    res.render("products/products", { products: productsSearch, page: page });
  },
  denied: (req, res) => {
    res.render("acces-denied");
  },
  contact: (req, res) => {
    res.render("contact");
  },
  about: (req, res) => {
    res.render("about");
  },
  //purchaseCart:(req, res)=>{
  //let products = getProducts();
  //const i = products.findIndex((prod) => {
  //return prod.id == req.params.id;
  //});

  // }
};

module.exports = controller;
