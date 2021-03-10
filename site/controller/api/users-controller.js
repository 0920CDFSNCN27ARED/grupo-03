const { User, Sequelize } = require("../../database/models");
const Op = Sequelize.Op;

module.exports = {
  emails: async (req, res) => {
    const page = req.query.page ? Number(req.query.page) : 0;
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
};
