'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Personal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Personal.init({
    citizenId: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: DataTypes.STRING
    },
    titleTH: DataTypes.STRING,
    titleEN: DataTypes.STRING,
    nameTH: DataTypes.STRING,
    nameEN: DataTypes.STRING,
    lastnameTH: DataTypes.STRING,
    lastnameEN: DataTypes.STRING,
    birthday: DataTypes.STRING,
    gender: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    tableName: 'personal',
    modelName: 'Personal',
  });

  return Personal;
};