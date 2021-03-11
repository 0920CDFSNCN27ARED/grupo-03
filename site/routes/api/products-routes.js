const express = require("express");
const router = express.Router();

const productsController = require("../../controller/api/products-controller");

router.get("/products", productsController.products);
router.get("/offers", productsController.offers);
//router.get("/admin", productsController.categories);

module.exports = router;
