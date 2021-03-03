const {
  ProductCategory,
  Product,
  ProductSale,
  Sale,
} = require("../database/models");
const productService = require("../services/productService");
const { validationResult } = require("express-validator");

const controller = {
  products: async (req, res) => {
    const products = await productService.findAll();
    res.render("products/products", { products });
  },
  details: async (req, res) => {
    const product = await productService.findOne(req.params.id);
    res.render("products/details", { product });
  },
  showEdit: async (req, res) => {
    const products = await productService.findOne(req.params.id);
    if (products == null) {
      return res
        .status(404)
        .send("404 not found. <br> ¡Lo siento, no tenemos ese producto!");
    }
    res.render("products/edit", { product: products, title: "Edit Product" });
  },
  edit: async (req, res) => {
    const products = await productService.findOne(req.params.id);
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("products/edit", {
        errors: errors.array(),
        product: products,
      });
    }

    const filename = req.file ? req.file.filename : products.image;
    await Product.update(
      {
        ...req.body,
        image: filename,
      },
      { where: { id: products.id } }
    );
    res.redirect("/products");
  },
  showCreate: async (req, res) => {
    res.render("products/create", { title: "Create Product" });
  },
  create: async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("products/create", { errors: errors.array() });
    }

    console.log(req.body);
    const product = await Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.file.filename,
      categoryId: req.body.category,
      discount: req.body.discount,
      color: req.body.color,
    });
    res.redirect(`/products/details/${product.id}`);
  },
  delete: async (req, res) => {
    await ProductSale.destroy({
      where: {
        productId: req.params.id,
      },
    });

    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/products");
  },
};

module.exports = controller;
