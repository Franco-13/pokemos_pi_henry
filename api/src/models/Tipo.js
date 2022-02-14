const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('tipo', {
    nombre: {
      type: DataTypes.STRING,
      unique: true
    }
  })
}