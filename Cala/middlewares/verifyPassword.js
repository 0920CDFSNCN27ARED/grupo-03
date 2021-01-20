const { check, validationResult, body } = require("express-validator");

function verifyPasswordsMatch(req, res, next) {
  const confirmPassword = req.body.password;

  return check("passConf").equals(confirmPassword);
}

module.exports = verifyPasswordsMatch;
