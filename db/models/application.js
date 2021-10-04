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
  Skill.init({
    id: {
      type: DataTypes.UUID,
      //primaryKey: true,
      defaultValue: DataTypes.UUID
    },
    idCardNo:DataTypes.STRING,
    no: DataTypes.STRING,
    position1: DataTypes.STRING,
    position2: DataTypes.STRING,
    expectedSalary: DataTypes.STRING,
    availableDate: new Date(),
  }, {
    sequelize,
    paranoid: true,
    tableName: 'Application',
    modelName: 'Application',
  });

  return Application;
};