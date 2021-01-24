const fs = require("fs");

function saveUsers(users) {
  let usersJson = JSON.stringify(users, null, 4);
  fs.writeFileSync("data/allUsersdb.json", usersJson);
}

module.exports = saveUsers;
