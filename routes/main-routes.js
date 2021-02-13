const express = require("express");
const router = express.Router();
const mainController = require("../controller/main-controller");
const assertSignedIn = require("../middlewares/assert-signed-in");
const authenticate = require("../middlewares/authenticate");

router.get("/", mainController.home);
router.get("/cart", mainController.cart);
module.exports = router;