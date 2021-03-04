const { validationResult } = require("express-validator");

function validateLogin(req, res, next) {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("users/login", {
      errors: errors.array(),
      loginData: req.cookies.rememberMe,
    });
  } else {
    next();
  }
}

module.exports = validateLogin;
