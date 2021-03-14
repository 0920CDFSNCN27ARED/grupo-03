const { User, Sequelize } = require("../../database/models");

module.exports = {
  users: async (req, res) => {
    const count = await User.count();
    const users = await User.findAll();
    const userList = [];
    users.forEach((user) => {
      const oneUser = {
        id: user.id,
        name: user.firstName,
        email: user.email,
        urlDetail: "localhost:3001/api/users/users/" + user.id,
      };

      userList.push(oneUser);
    });

    res.send({
      meta: {
        status: 200,
        url: req.originalUrl,
      },
      data: {
        totalCount: count,
        userList,
      },
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

  detail: async (req, res) => {
    const users = await User.findByPk(req.params.id);

    res.send({
      meta: {
        status: 200,
        url: req.originalUrl,
      },
      data: {
        usuario: {
          firstName: users.firstName,
          lastName: users.lastName,
          email: users.email,
          user: users.user,
          image: "http://localhost:3001/images/users/" + users.image,
        },
      },
    });
  },
};
