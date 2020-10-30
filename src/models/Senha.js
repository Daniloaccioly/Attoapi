const { Model, DataTypes } = require('sequelize');

class Senha extends Model {
  static init(sequelize) {
    super.init({
      count: DataTypes.INTEGER,
      last: DataTypes.STRING,    
    }, {
      sequelize// instancia conectada ao banco de dados
    })
  }

}

module.exports = Senha;