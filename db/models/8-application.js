'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Application.init({
    applicationID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUID
    },
    generalID: {
      type: DataTypes.UUID,
     // primaryKey: true,
      defaultValue: DataTypes.UUID
    },
    numberOrder: DataTypes.INTEGER,
    position1: DataTypes.STRING,
    position2: DataTypes.STRING,
    expectedSalary: DataTypes.STRING,
    availableDate: DataTypes.DATE,
    status:DataTypes.STRING,
  }, {
    sequelize,
    paranoid:true,
    tableName: 'Application',
    modelName: 'Application',
  });

  return Application;
};