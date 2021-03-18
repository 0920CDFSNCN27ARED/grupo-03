const express = require("express");
const router = express.Router();
const mainController = require("../controller/main-controller");
const assertSignedIn = require("../middlewares/assert-signed-in");
const authenticate = require("../middlewares/authenticate");

router.get("/", authenticate, mainController.home);
router.get("/cart", mainController.cart);
router.get("/search", mainController.search);
router.get("/accesDenied", mainController.denied);
router.get("/contact", mainController.contact);
router.get("/about", mainController.about);
module.exports = router;
