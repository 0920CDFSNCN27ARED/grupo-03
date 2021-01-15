const path = require("path");
const bcrypt = require("bcrypt");
const fs = require("fs");

function getUsers() {
  const usersJson = fs.readFileSync(__dirname + "/../data/allUsersdb.json");
  return JSON.parse(usersJson);
}

const controller = {
  login: (req, res) => {
    res.render("users/login");
  },
  autLogin: (req, res) => {
    const users = getUsers();

    for (let i = 0; i < users.length; i++) {
      if (
        users[i].user == req.body.user &&
        bcrypt.compareSync(req.body.password, users[i].password)
      ) {
        return res.send("te logueaste");
      } else {
        return res.send("error");
      }
    }
  },
  register: (req, res) => {
    res.render("users/register");
  },
  autRegister: (req, res) => {
    let newUser = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      user: req.body.user,
      mail: req.body.email,
      image: req.files[0].filename,
      password: bcrypt.hashSync(req.body.password, 10),
    };

    let exist = fs.existsSync("data/allUsersdb.json", (exist) => {
      return exist;
    });

    if (exist) {
      let users = getUsers();
      users.push(newUser);
      let usersJson = JSON.stringify(users, null, 4);
      fs.writeFileSync("data/allUsersdb.json", usersJson);
    } else {
      let usersArray = [];
      usersArray.push(newUser);
      let usersArrayJson = JSON.stringify(usersArray, null, 4);
      fs.writeFileSync("data/allUsersdb.json", usersArrayJson);
    }
    res.redirect("/");
  },
};

module.exports = controller;
