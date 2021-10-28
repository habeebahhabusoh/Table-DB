'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Requisition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Requisition.init({
    requisitionID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUID
    },
    manPowerID: {
      type: DataTypes.UUID,
     // primaryKey: true,
      defaultValue: DataTypes.UUID
    },
    applicationID: {
        type: DataTypes.UUID,
       // primaryKey: true,
        defaultValue: DataTypes.UUID
      },
  }, {
    sequelize,
    tableName: 'Requisition',
    modelName: 'Requisition',
  });

  return Requisition;
};