'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class General extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  General.init({
    generalID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUID
    },
    perfixTH: DataTypes.STRING,
    firstNameTH: DataTypes.STRING,
    middleNameTH: DataTypes.STRING,
    lastNameTH: DataTypes.STRING,
    perfixEN: DataTypes.STRING,
    firstNameEN: DataTypes.STRING,
    middleNameEN: DataTypes.STRING,
    lastNameEN: DataTypes.STRING,
    birthDate:  new Date(),
    age: DataTypes.STRING,
    maritalStatus:DataTypes.STRING,
    sex:DataTypes.STRING,
    height:DataTypes.STRING,
    weight:DataTypes.STRING,
    nationality:DataTypes.STRING,
    idCardNo:DataTypes.STRING,
    expiryDate: new Date(),
    militaryService:DataTypes.STRING,
    militaryData:DataTypes.STRING,
    crimeStatus:DataTypes.STRING,
    crimeData:DataTypes.STRING,
    disease:DataTypes.STRING,
    diseaseData:DataTypes.STRING,
  }, {
    sequelize,
    tableName: 'General',
    modelName: 'General',
  });

  return General;
};