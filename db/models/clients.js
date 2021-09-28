'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Client.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    logoUri: DataTypes.TEXT,
    clientId: DataTypes.TEXT,
    clientSecret: DataTypes.TEXT,
    redirectUris: DataTypes.ARRAY(DataTypes.TEXT),
  }, {
    sequelize,
    tableName: 'clients',
    modelName: 'Client',
  });

  return Client;
};