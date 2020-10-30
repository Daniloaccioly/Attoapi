const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      machine: DataTypes.STRING,
      qrcode: DataTypes.STRING,
    }, {
      sequelize// instancia conectada ao banco de dados
    })
  }

}

module.exports = User;