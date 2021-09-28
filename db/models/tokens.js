'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Token.init({
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    accessToken: DataTypes.TEXT,
    accessTokenExpiresOn: DataTypes.DATE,
    clientId: DataTypes.TEXT,
    userId: DataTypes.STRING,
  }, {
    sequelize,
    tableName: 'tokens',
    modelName: 'Token',
  });

  return Token;
};