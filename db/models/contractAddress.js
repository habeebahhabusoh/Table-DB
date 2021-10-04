'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ContractAddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ContractAddress.init({
    id: {
      type: DataTypes.UUID,
     // primaryKey: true,
      defaultValue: DataTypes.UUID
    },
    detailTH: DataTypes.STRING,
    subAreaTH: DataTypes.STRING,
    areaTH: DataTypes.STRING,
    provinceTH: DataTypes.STRING,
    postalCodeTH: DataTypes.STRING,
    detailEN: DataTypes.STRING,
    subAreaEN: DataTypes.STRING,
    areaEN: DataTypes.STRING,
    provinceEN: DataTypes.STRING,
    postalCodeEN: DataTypes.STRING,
    presentAddress: DataTypes.STRING,
    presentAddressSubArea: DataTypes.STRING,
    presentAddressArea: DataTypes.STRING,
    presentAddressProvince: DataTypes.STRING,
    presentAddressPostalCode: DataTypes.STRING,
    contactEmail: DataTypes.STRING,
    contactPhone: DataTypes.STRING,
  }, {
    sequelize,
    paranoid: true,
    tableName: 'ContractAddress',
    modelName: 'ContractAddress',
  });

  return ContractAddress;
};