'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: DataTypes.STRING
    },
    username: DataTypes.TEXT,
    password: DataTypes.TEXT,
    displayName: DataTypes.STRING,
    verifyType: DataTypes.STRING,
    verify: DataTypes.BOOLEAN,
  }, {
    sequelize,
    paranoid: true,
    tableName: 'users',
    modelName: 'User',
  });

  return User;
};