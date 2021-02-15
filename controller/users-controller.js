const path = require("path");
const bcrypt = require("bcrypt");
const fs = require("fs");
const { validationResult } = require("express-validator");

const getUsers = require("../utils/get-users");
const saveUsers = require("../utils/save-users");
const { CategoryUser, User, Sale } = require("../database/models");
const userService = require("../services/userService");

const controller = {
  login: (req, res) => {
    console.log(req.cookies.rememberMe);

    res.render("users/login", {
      loginData: req.cookies.rememberMe,
    });
  },
  autLogin: (req, res) => {
    const users = getUsers();
    const user = users.find((user) => {
      return (
        user.user == req.body.user &&
        bcrypt.compareSync(req.body.password, user.password)
      );
    });

    if (req.body.remember == "yes") {
      res.cookie("rememberMe", {
        user: req.body.user,
        password: req.body.password,
      });
    }

    if (user) {
      req.session.loggedUserId = user.id;
      res.redirect("/");
    } else {
      res.redirect("login");
    }
  },
  logout: (req, res) => {
    delete req.session.loggedUserId;
    res.redirect("/");
  },

  register: (req, res) => {
    res.render("users/register");
  },
  autRegister: (req, res) => {
    // console.log(validationResult(req));
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("users/register", { errors: errors.array() });
    }

    const users = getUsers();

    let newUser = {
      id: users[users.length - 1].id + 1,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      user: req.body.user,
      mail: req.body.email,
      image: req.file.filename,
      password: bcrypt.hashSync(req.body.password, 10),
    };

    let exist = fs.existsSync("data/allUsersdb.json", (exist) => {
      return exist;
    });

    if (exist) {
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
