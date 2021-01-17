const express = require("express");
const router = express.Router();
const mainController = require("../controller/main-controller");
const assertSignedIn = require("../middlewares/assert-signed-in");

router.get("/", mainController.home);
router.get("/cart", mainController.cart);
module.exports = router;
