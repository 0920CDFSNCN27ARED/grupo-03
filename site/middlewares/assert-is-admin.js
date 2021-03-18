function assertIsAdmin(req, res, next) {
  if (res.locals.user.categoryId == 1) {
    res.redirect("/accesDenied");
  } else {
    next();
  }
}
module.exports = assertIsAdmin;
