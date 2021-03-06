"use strict";

module.exports = function (sequelize, dataTypes) {
  const User = sequelize.define(
    "User",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      firstName: {
        type: dataTypes.STRING(45),
        allowNull: false,
      },
      lastName: {
        type: dataTypes.STRING(45),
        allowNull: false,
      },
      email: {
        type: dataTypes.STRING(45),
        allowNull: false,
        unique: true,
      },
      user: {
        type: dataTypes.STRING(16),
        allowNull: false,
        unique: true,
      },
      image: {
        type: dataTypes.STRING(255),
      },
      password: {
        type: dataTypes.STRING(255),
        allowNull: false,
      },
      categoryId: {
        type: dataTypes.INTEGER,
      },
    },
    {
      tableName: "users",
      timestamps: true,
    }
  );

  User.associate = function (models) {
    User.belongsTo(models.CategoryUser, {
      as: "categoryUser",
      foreignKey: "categoryId",
    });
    User.hasMany(models.Sale, {
      as: "sales",
      foreignKey: "userId",
    });
  };

  return User;
};
