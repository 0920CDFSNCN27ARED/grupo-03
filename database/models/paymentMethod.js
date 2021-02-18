"use strict";
module.exports = (sequelize, dataTypes) => {
  const paymentMethod = sequelize.define("PaymentMethod", {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    method: {
      allowNull: false,
      type: dataTypes.STRING(45),
    },
  });
  paymentMethod.associate = function (models) {
    paymentMethod.hasMany(models.Sale, {
      as: "sales",
      foreignKey: "payMethodId",
    });
  };
  return paymentMethod;
};
