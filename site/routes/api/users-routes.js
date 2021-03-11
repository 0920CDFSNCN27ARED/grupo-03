const express = require("express");
const router = express.Router();

const usersController = require("../../controller/api/users-controller");

router.get("/users", usersController.users);
router.get("/emails", usersController.emails);
router.get("/admin", usersController.admin);

module.exports = router;
