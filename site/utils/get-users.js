const fs = require("fs");

function getUsers() {
  const usersJson = fs.readFileSync(__dirname + "/../data/allUsersdb.json", {
    encoding: "utf-8",
  });
  return JSON.parse(usersJson);
}

module.exports = getUsers;
