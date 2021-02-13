"use strict";

const productSale = require("./productSale");

module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      allowNull: false,
      type: dataTypes.DATETIME,
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
      as: "Users",
      foreignKey: "userId",
    });
    Sale.belongsTo(models.paymentMethod, {
      as: "paymentMethods",
      foreignKey: "payMethodId",
    });
    Sale.belongsToMany(models.Products, {
      as: "products",
      trhough: "productSale",
      foreignKey: "saleId",
      otherKey: "productId",
      timestamps: false,
    });
  };
  return Sale;
};
