module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("burgers", {
    name: { type: DataTypes.STRING, allowNull: false, validate: { len: [1,140]}},
    isDevoured: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
  });
  return Burger;
};
