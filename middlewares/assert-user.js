const { get } = require("../routes/users-routes");
const getUsers = require("../utils/get-users");
function assertUser(req, res, netx) {
  const users = getUsers();
  const user = users.find((user) => {
    return user.user == req.body.user;
  });
  if (!user) {
    return res.redirect("register");
  } else {
    netx();
  }
}
module.exports = assertUser;
