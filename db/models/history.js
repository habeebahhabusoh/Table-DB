'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  History.init({
    id: {
      type: DataTypes.UUID,
     // primaryKey: true,
      defaultValue: DataTypes.UUID
    },
    companyNameHistory: DataTypes.STRING,
    positionHistory: DataTypes.STRING,
    salaryHistory: DataTypes.STRING,
    startDate: new Date(),
    endDate: new Date(),
  }, {
    sequelize,
    paranoid: true,
    tableName: 'History',
    modelName: 'History',
  });

  return History;
};