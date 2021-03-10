const express = require("express");
const router = express.Router();

const usersController = require("../../controller/api/users-controller");

router.get("/emails", usersController.emails);

module.exports = router;
