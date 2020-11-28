const express = require("express");
const router = express.Router();
const mainController = require("../controller/main-controller");

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/cart", mainController.cart);

module.exports = router;
