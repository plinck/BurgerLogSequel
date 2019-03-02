const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("burgers", {
    name: { type: Sequelize.STRING, allowNull: false, validate: { len: [1,140]}},
    isDevoured: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false }
  });
  return Burger;
};
