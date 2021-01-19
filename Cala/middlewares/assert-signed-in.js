function assertSignedIn(req, res, next) {
  if (!res.locals.user) {
    res.redirect("/login");
  } else {
    next();
  }
}
module.exports = assertSignedIn;
