function assertSignedIn(req, res, next) {
  const id = req.session.loggedUser;
  if (!id) {
    res.redirect("/login");
  } else {
    next();
  }
}
module.exports = assertSignedIn;
