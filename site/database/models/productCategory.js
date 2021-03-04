"use strict";
module.exports = function (sequelize, dataTypes) {
  const ProductCategory = sequelize.define(
    "ProductCategory",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: dataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: "product_categories",
    }
  );

  ProductCategory.associate = function (models) {
    ProductCategory.hasMany(models.Product, {
      as: "products",
      foreignKey: "categoryId",
    });
  };

  return ProductCategory;
};
