const express = require("express");
const router = express.Router();

const productsController = require("../../controller/api/products-controller");

router.get("/products", productsController.products);

router.get("/allProducts", productsController.allProducts);
router.get("/offers", productsController.offers);
router.get("/latest", productsController.latest);
router.get("/products/:id", productsController.detail);


//router.get("/admin", productsController.categories);

module.exports = router;
