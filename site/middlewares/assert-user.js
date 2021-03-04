const { get } = require("../routes/users-routes");
const getUsers = require("../utils/get-users");

const { CategoryUser, User, Sale } = require("../database/models");
const userService = require("../services/userService");

async function assertUser(req, res, next) {
  const users = await userService.findAll();
  const user = users.find((user) => {
    return user.user == req.body.user;
  });
  if (!user) {
    return res.redirect("register");
  } else {
    next();
  }
}

module.exports = assertUser;
