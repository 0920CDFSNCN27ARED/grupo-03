const express = require("express");
const router = express.Router();
const mainController = require("../controller/main-controller");

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.post("/", mainController.autLogin);
router.get("/cart", mainController.cart);
router.get("/register", mainController.register);
router.post("/register", mainController.autRegister);
module.exports = router;
