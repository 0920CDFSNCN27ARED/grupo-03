const { CategoryUser, User, Sale } = require("../database/models");
const userService = require("../services/userService");

async function authenticate(req, res, next) {
  const id = req.session.loggedUserId;

  if (!id) return next();

  const users = await userService.findAll();

  const loggedUser = await users.find((user) => {
    return user.id == id;
  });

  if (!loggedUser) {
    delete req.session.loggedUserId;
    return next();
  }

  res.locals.user = loggedUser;

  next();
}

module.exports = authenticate;
