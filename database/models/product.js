module.exports = function (sequelize, dataTypes) {
  const Product = sequelize.define("Product", {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
    description: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
    price: {
      type: dataTypes.DECIMAL(45),
      allowNull: false,
    },
    image: {
      type: dataTypes.STRING(255),
    },
    categoryId: {
      type: dataTypes.INTEGER,
    },
    discount: {
      type: dataTypes.INTEGER,
    },
    color: {
      type: dataTypes.STRING(20),
    },
  });

  Product.associate = function (models) {
    Product.belongsTo(models.ProductCategory, {
      as: "productCategory",
      foreignKey: "categoryId",
    });
    Product.hasMany(models.ProductSale),
      {
        as: "ProductsSales",
        foreignKey: "productId",
      };
  };

  return CategoryUser;
};
