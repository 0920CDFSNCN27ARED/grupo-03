module.exports = function (sequelize, dataTypes) {
  const CategoryUser = sequelize.define("CategoryUser", {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: dataTypes.STRING(20),
      allowNull: false,
    },
  });

  CategoryUser.associate = function (models) {
    CategoryUser.hasMany(models.User, {
      as: "users",
      foreignKey: "categoryId",
    });
  };

  return CategoryUser;
};
