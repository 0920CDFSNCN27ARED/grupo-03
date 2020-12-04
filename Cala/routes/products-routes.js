const express = require("express");
const router = express.Router();
const productController = require("../controller/products-controller");

router.get("/details/:id", productController.details);

//router.get("/products",productController.products);

module.exports = router;
