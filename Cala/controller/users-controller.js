const path = require("path");
const bcrypt = require("bcrypt");
const fs = require("fs");

//const { check, validationResult, body } = require("express-validator");

const getUsers = require("../utils/get-users");
const saveUsers = require("../utils/save-users");

const controller = {
  login: (req, res) => {
    res.render("users/login");
  },
  autLogin: (req, res) => {
    const users = getUsers();
    const user = users.find((user) => {
      return (
        user.user == req.body.user &&
        bcrypt.compareSync(req.body.password, user.password)
      );
    });
    if (!user) {
      return res.redirect("login");
    }
    req.session.loggedUser = user.id;
    return res.redirect("/");
    // for (let i = 0; i < users.length; i++) {
    // if (
    // users[i].user == req.body.user &&
    //bcrypt.compareSync(req.body.password, users[i].password)
    //) {
    //return res.render("users/register");
    //} else {
    // return res.render("not-found");
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
      saveUsers(users);
    } else {
      let usersArray = [];
      usersArray.push(newUser);
      saveUsers(users);
    }
    res.redirect("/");
  },
};

module.exports = controller;
