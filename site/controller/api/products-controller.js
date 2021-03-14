const { Product, Sequelize } = require("../../database/models");
const Op = Sequelize.Op;

module.exports = {
  products: async (req, res) => {
    const count = await Product.count();
    const products = await Product.findAll();

    res.send({
      meta: {
        status: 200,
        url: req.originalUrl,
        totalCount: count,
      },
      data: products,
    });
  },

  offers: async (req, res) => {
    const count = await Product.count();
    const offers = await Product.findAll({
      where: {
        discount: {
          [Op.gt]: 0,
        },
      },
    });

    res.send({
      meta: {
        status: 200,
        url: req.originalUrl,
        totalCount: count,
      },
      data: offers,
    });
  },

  count:async (req, res) => {
    const count = await Product.count();
   

    res.send({
      meta: {
        status: 200,
        url: req.originalUrl,
        totalCount: count,
      },
      data: count,
    });
  },

  //categories: async (req, res) => {
  //  const count = await Product.count();
  //  const admin = await Product.findAll({
  //    where: {
  //      categoryId: "2",
  //    },
  //  });

  // res.send({
  //   meta: {
  //     status: 200,
  //     url: req.originalUrl,
  //    totalCount: count,
  //  },
  //  data: admin,
  //});
  // },
};
