const express = require("express");
const router = express.Router();
const productController = require("../controller/products-controller");
const path = require("path");
const assertSignedIn = require("../middlewares/assert-signed-in");
const assertIsAdmin = require("../middlewares/assert-is-admin");

//inicio multer
const multer = require("multer");
let storage = multer.diskStorage({
  destination: (req, file, cb) =>
    cb(null, __dirname + "/../public/images/products"),

  filename: (req, file, cb) =>
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    ),
});

let upload = multer({ storage: storage });
// fin multer

router.get("/", productController.products);
router.get("/details/:id", assertSignedIn, productController.details);
router.get(
  "/:id/edit",
  assertSignedIn,
  assertIsAdmin,
  productController.showEdit
);
router.get(
  "/create",
  assertSignedIn,
  assertIsAdmin,
  productController.showCreate
);
router.put("/:id", upload.any(), productController.edit);
router.delete("/:id", productController.delete);
router.post("/", upload.any(), productController.create);

module.exports = router;
