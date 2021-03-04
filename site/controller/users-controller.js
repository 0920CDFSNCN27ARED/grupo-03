const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

const getUsers = require("../utils/get-users");
const saveUsers = require("../utils/save-users");
const { CategoryUser, User, Sale } = require("../database/models");
const userService = require("../services/userService");

const controller = {
  profile: async (req, res) => {
    const user = await userService.findOne(req.params.id);

    res.render("users/profile", { user: user });
  },
  showEditProf: async (req, res) => {
    const user = await userService.findOne(req.params.id);

    res.render("users/editProfile", { user: user });
  },
  editProf: async (req, res) => {
    const user = await userService.findOne(req.params.id);

    const filename = req.file ? req.file.filename : profileEdit.image;
    await user.Update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        user: req.body.user,
        image: filename,
        password: user.password,
        categoryId: 1,
      },
      {
        where: { id: user.id },
      }
    );
    res.redirect("/profile");
  },
  login: (req, res) => {
    //console.log(req.cookies.rememberMe);

    res.render("users/login", {
      loginData: req.cookies.rememberMe,
    });
  },

  autLogin: async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("users/login", { errors: errors.array() });
    }

    const users = await userService.findAll();

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
  autRegister: async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("users/register", { errors: errors.array() });
    }
    const newUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      user: req.body.user,
      image: req.file.filename,
      password: bcrypt.hashSync(req.body.password, 10),
      categoryId: 2,
    });

    await newUser.save();

    res.redirect("/login");
  },
  delete: async (req, res) => {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/");
  },
};

module.exports = controller;
