const express = require("express");
const router = express.Router();
const productController = require("../controller/products-controller");
const path = require("path");
const assertSignedIn = require("../middlewares/assert-signed-in");
const assertIsAdmin = require("../middlewares/assert-is-admin");
const { check, validationResult, body } = require("express-validator");
const { Product } = require("../database/models");

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

router.get("/page/:page", productController.products);
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
router.put(
  "/:id",
  upload.single("image"),
  [
    body("name")
      .isLength({ min: 5 })
      .withMessage("El nombre debe tener al menos 5 caracteres"),
    body("description")
      .isLength({ min: 20 })
      .withMessage("La descripcion debe tener al menos 20 caracteres"),
    body("image")
      //.custom((value, { req }) => {
      //  if (!req.file) throw new Error("El campo imagen es requerido");
      //  return true;
      //})
      .custom((value, { req }) => {
        if (req.file) {
          switch (req.file.mimetype) {
            case "image/jpg":
              return ".jpg";
            case "image/jpeg":
              return ".jpeg";
            case "image/png":
              return ".png";
            case "image/gif":
              return ".gif";
            default:
              return false;
          }
        } else {
          return true;
        }
      })
      .withMessage(
        "Solo se aceptan archivos con las siguientes extensiones: .jpg / .gif / .png / .jpeg"
      ),
  ],
  productController.edit
);
router.delete("/:id", productController.delete);
router.post(
  "/",
  upload.single("image"),
  [
    body("name")
      .isLength({ min: 5 })
      .withMessage("El nombre debe tener al menos 5 caracteres"),
    body("description")
      .isLength({ min: 20 })
      .withMessage("La descripcion debe tener al menos 20 caracteres"),
    body("image")
      .custom((value, { req }) => {
        if (!req.file) throw new Error("El campo imagen es requerido");
        return true;
      })
      .custom((value, { req }) => {
        if (req.file) {
          switch (req.file.mimetype) {
            case "image/jpg":
              return ".jpg";
            case "image/jpeg":
              return ".jpeg";
            case "image/png":
              return ".png";
            case "image/gif":
              return ".gif";
            default:
              return false;
          }
        }
      })
      .withMessage(
        "Solo se aceptan archivos con las siguientes extensiones: .jpg / .gif / .png / .jpeg"
      ),
  ],
  productController.create
);

module.exports = router;
