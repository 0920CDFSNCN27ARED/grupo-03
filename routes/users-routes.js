const express = require("express");
const router = express.Router();
const usersController = require("../controller/users-controller");
const path = require("path");

//inicio multer
const multer = require("multer");
let storage = multer.diskStorage({
  destination: (req, file, cb) =>
    cb(null, __dirname + "/../public/images/users"),

  filename: (req, file, cb) =>
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    ),
});

let upload = multer({ storage: storage });
// fin multer

const { check, validationResult, body } = require("express-validator");
const assertUser = require("../middlewares/assert-user");
const validateLogin = require("../middlewares/validate-login");
router.get("/login", usersController.login);
router.post("/logout", usersController.logout);
router.post(
  "/",
  [
    body("user")
      .isLength({ min: 1, max: 16 })
      .withMessage("El campo usuario debe estar completo"),
    body("password")
      .isNumeric()
      .withMessage("La clave debe ser numerica")
      .isLength({ min: 8, max: 16 })
      .withMessage("La clave debe tener entre 8 y 16 caracteres"),
  ],
  validateLogin,
  assertUser,

  usersController.autLogin
);
router.get("/register", usersController.register);
router.post(
  "/register",
  upload.single("image"),
  [
    body("first_name")
      .isAlpha()
      .withMessage("El campo nombre debe ser alfabetico")
      .isLength({ min: 1, max: 99 })
      .withMessage("El campo nombre debe estar completo"),
    body("last_name")
      .isAlpha()
      .withMessage("El campo apellido debe ser alfabetico")
      .isLength({ min: 1, max: 99 })
      .withMessage("El campo apellido debe estar completo"),
    body("user")
      .isAlphanumeric()
      .withMessage("El campo usuario debe ser alfanumerico")
      .isLength({ min: 1, max: 16 })
      .withMessage("El campo usuario debe estar completo"),
    check("email")
      .isEmail()
      .withMessage("Debes ingresa un email valido")
      .isLength()
      .withMessage("El campo email debe estar completo"),
    check("image").isLength().withMessage("Debes cargar una imagen de perfil"),
    body("password")
      .isNumeric()
      .withMessage("La clave debe ser numerica")
      .isLength({ min: 8, max: 16 })
      .withMessage("La clave debe tener entre 8 y 16 caracteres"),
    body("passConf").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Las contraseñas no coinciden");
      }
      return true;
    }),
  ],
  usersController.autRegister
);

module.exports = router;
