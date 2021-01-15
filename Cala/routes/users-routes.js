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

router.get("/login", usersController.login);
router.post("/", usersController.autLogin);
router.get("/register", usersController.register);
router.post("/register", upload.any(), usersController.autRegister);

module.exports = router;
