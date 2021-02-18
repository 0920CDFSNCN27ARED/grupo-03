const { CategoryUser, User, Sale } = require("../database/models");

module.exports = {
  findOne: async (id) => {
    return await User.findByPk(id, {
      //  include: ["categoryUser", "sales"],
    });
  },

  findAll: async () => {
    return await User.findAll({
      //  include: ["categoryUser", "sales"],
    });
  },
};
