"use strict";
module.exports = (sequelize, DataTypes) => {
  const paymentMethod = sequelize.define("paymentMethod", {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    method: {
      allowNull: false,
      type: dataTypes.VARCHAR,
    },
  });
  paymentMethod.associate = function (models) {
    paymentMethod.hasMany(models.Sales, {
      as: "sales",
      foreignKey: "payMethodId",
    });
  };
  return paymentMethod;
};
