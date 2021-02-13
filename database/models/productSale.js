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

  return ProductSale;
};
