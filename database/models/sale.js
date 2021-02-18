"use strict";

const productSale = require("./productSale");

module.exports = (sequelize, dataTypes) => {
  const Sale = sequelize.define("Sale", {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      allowNull: false,
      type: dataTypes.DATE,
    },
    userId: {
      allowNull: false,
      type: dataTypes.INTEGER,
    },
    payMethodId: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  });
  Sale.associate = function (models) {
    Sale.belongsTo(models.User, {
      as: "users",
      foreignKey: "userId",
    });
    Sale.belongsTo(models.PaymentMethod, {
      as: "paymentMethods",
      foreignKey: "payMethodId",
    });
    Sale.belongsToMany(models.Product, {
      as: "products",
      through: models.ProductSale,
      foreignKey: "saleId",
      otherKey: "productId",
      timestamps: false,
    });
  };
  return Sale;
};
