const {
  ProductCategory,
  Product,
  ProductSale,
  Sale,
} = require("../database/models");

module.exports = {
  findOne: async (id) => {
    return await Product.findByPk(id, {
      include: ["productCategory", "sales", "productSale"],
    });
  },

  findAll: async () => {
    return await Product.findAll({
      include: ["productCategory", "sales", "productSale"],
    });
  },
};
