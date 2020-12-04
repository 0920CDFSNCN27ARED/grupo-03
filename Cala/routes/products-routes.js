const express = require("express");
const router = express.Router();
const productController = require("../controller/products-controller");


router.get("/",productController.products);
router.get("/details/:id", productController.details);
router.get("/:id/edit", productController.showEdit);

router.put("/:id", productController.edit);



module.exports = router;
