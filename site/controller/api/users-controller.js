const { User, Sequelize } = require("../../database/models");

module.exports = {
  users: async (req, res) => {
    const count = await User.count();
    const users = await User.findAll();

    res.send({
      meta: {
        status: 200,
        url: req.originalUrl,
        totalCount: count,
      },
      data: users,
    });
  },

  emails: async (req, res) => {
    const count = await User.count();
    const users = await User.findAll();
    const usersEmail = [];

    users.forEach((user) => {
      const email = user.email;
      usersEmail.push(email);
    });

    res.send({
      meta: {
        status: 200,
        url: req.originalUrl,
        totalCount: count,
      },
      data: usersEmail,
    });
  },
  admin: async (req, res) => {
    const count = await User.count();
    const admin = await User.findAll({
      where: {
        categoryId: "2",
      },
    });

    res.send({
      meta: {
        status: 200,
        url: req.originalUrl,
        totalCount: count,
      },
      data: admin,
    });
  },
};
