const { User, Sequelize } = require("../../database/models");
const Op = Sequelize.Op;

module.exports = {
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
};
