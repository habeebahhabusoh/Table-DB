'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Driving extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Driving.init({
    drivingID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUID
    },
    id: {
      type: DataTypes.UUID,
     // primaryKey: true,
      defaultValue: DataTypes.UUID
    },
    drivingLicenseType: DataTypes.STRING,
    drivingType: DataTypes.STRING,
    drivingLicenseNo: DataTypes.STRING,
    drivingExpiryDate: new Date(),
  }, {
    sequelize,
    paranoid: true,
    tableName: 'Driving',
    modelName: 'Driving',
  });

  return Driving;
};