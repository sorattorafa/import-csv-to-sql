const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      list: DataTypes.ENUM('1', '2', '1, 2'),
    }, {
      sequelize,
    });
  }
}

module.exports = User;
