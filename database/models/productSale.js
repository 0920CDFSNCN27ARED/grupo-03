"use strict";

module.exports = (sequelize, DataTypes) => {
  const ProductSale = sequelize.define("ProductSale", {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    saleId: {
      allowNull: false,
      type: dataTypes.INTEGER,
    },
    productId: {
      allowNull: false,
      type: dataTypes.INTEGER,
    },
    quantity: {
      allowNull: false,
      type: dataTypes.INTEGER,
    },
    salePrice: {
      type: dataTypes.DECIMAL,
      allowNull: false,
    },
  });
  ProductSale.associate = function (models) {
    ProductSale.belongsTo(models.Product, {
      as: "product",
      foreignKey: "productId",
    });
    ProductSale.associate = function (models) {
      ProductSale.belongsTo(models.Sale, {
        as: "sale",
        foreignKey: "saleId",
      });
    };
  };

  return ProductSale;
};
