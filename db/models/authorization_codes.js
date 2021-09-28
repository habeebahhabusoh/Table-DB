'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class authorizationCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  authorizationCode.init({
    code: {
      type: DataTypes.TEXT,
      primaryKey: true,
      defaultValue: DataTypes.TEXT
    },
    clientId: DataTypes.TEXT,
    redirectUri: DataTypes.TEXT,
    userId: DataTypes.STRING,
  }, {
    sequelize,
    tableName: 'authorization_codes',
    modelName: 'authorizationCode',
  });

  return authorizationCode;
};