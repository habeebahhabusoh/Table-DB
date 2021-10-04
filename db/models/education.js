'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Education extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Education.init({
    id: {
      type: DataTypes.UUID,
     // primaryKey: true,
      defaultValue: DataTypes.UUID
    },
    educationLevel: DataTypes.STRING,
    name: DataTypes.STRING,
    major: DataTypes.STRING,
    startDate: new Date(),
    endDate: new Date(),
  }, {
    sequelize,
    paranoid: true,
    tableName: 'Education',
    modelName: 'Education',
  });

  return Education;
};