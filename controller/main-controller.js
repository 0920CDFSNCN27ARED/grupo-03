const path = require("path");
const bcrypt = require("bcrypt");
const fs = require("fs");

//const getProducts = require("../utils/get-products");
//const getUsers = require("../utils/get-users");
const productService = require("../services/productService");

const controller = {
  home: async (req, res) => {
    const products = await productService.findAll();

    res.render("index", { products: products });
  },

  cart: (req, res) => {
    res.render("cart");
  },
  //purchaseCart:(req, res)=>{
  //let products = getProducts();
  //const i = products.findIndex((prod) => {
  //return prod.id == req.params.id;
  //});

  // }
};

module.exports = controller;
