'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Thai_provinces extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Thai_provinces.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: DataTypes.INTEGER
    },
    name_th: DataTypes.STRING,
    name_en: DataTypes.STRING,
   
  }, {
    sequelize,
    paranoid:true,
    tableName: 'Thai_provinces',
    modelName: 'Thai_provinces',
  });

  return Thai_provinces;
};