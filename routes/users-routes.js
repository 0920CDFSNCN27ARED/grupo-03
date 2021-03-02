const express = require("express");
const router = express.Router();
const usersController = require("../controller/users-controller");
const path = require("path");
const assertSignedIn = require("../middlewares/assert-signed-in");
const { User } = require("../database/models");
const bcrypt = require("bcrypt");

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
      .withMessage("El campo usuario debe estar completo")

      .custom(async (value, { req }) => {
        const usuarioDb = await User.findOne({ where: { user: value } });
        if (!usuarioDb) {
          throw new Error("El usuario o la contrasena son incorrectos usuario");
        }
        return true;
      }),
    body("password")
      .isLength({ min: 1, max: 16 })
      .withMessage("El campo contrasena debe estar completo")
      .custom(async (value, { req }) => {
        const { user, password } = req.body;
        const usuarioDb = await User.findOne({ where: { user: user } });
        if (usuarioDb) {
          const validPassword = bcrypt.compareSync(value, usuarioDb.password);
          if (!validPassword) {
            throw new Error("El usuario o la contrasena son incorrectos clave");
          }
          return true;
        }
      }),
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
    body("firstName")
      .isAlpha()
      .withMessage("El campo nombre debe ser alfabetico")
      .isLength({ min: 2, max: 99 })
      .withMessage("El campo nombre debe estar completo"),
    body("lastName")
      .isAlpha()
      .withMessage("El campo apellido debe ser alfabetico")
      .isLength({ min: 2, max: 99 })
      .withMessage("El campo apellido debe estar completo"),
    body("user")
      .isAlphanumeric()
      .withMessage("El campo usuario debe ser alfanumerico")
      .isLength({ min: 1, max: 16 })
      .withMessage("El campo usuario debe estar completo"),
    check("email")
      .isEmail()
      .withMessage("Debes ingresa un email valido")
      .custom(async (value) => {
        const user = await User.findAll({ where: { email: value } });
        if (user.length != 0) {
          throw new Error("El email ingresado ya esta registrado");
        }
        return true;
      })
      .isLength()
      .withMessage("El campo email debe estar completo"),
    check("image")
      .custom((value, { req }) => {
        console.log(req.file);
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
      })
      .withMessage(
        "Solo se aceptan archivos con las siguientes extensiones: .jpg / .gif / .png / .jpeg"
      )
      .isLength()
      .withMessage("Debes cargar una imagen de perfil"),
    body("password")
      .isStrongPassword()
      .withMessage(
        "La clave no es segura. Debe tener por lo menos 8 carácteres. Entre ellos: 1 número, 1 símbolo, 1 letra en mayúscula y 1 letra en minúscula"
      ),
    body("passConf").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Las contraseñas no coinciden");
      }
      return true;
    }),
  ],
  usersController.autRegister
);
router.get("/profile/:id", assertSignedIn, usersController.profile);
router.get("/:id/edit", usersController.showEditProf);

router.put("/:id", upload.single("image"), usersController.editProf);
router.delete("/:id", usersController.delete);
module.exports = router;
// a ver....
