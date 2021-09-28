'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Employee.init({
    employeeId: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: DataTypes.STRING
    },
    citizenId: DataTypes.STRING,
    position: DataTypes.STRING,
    section: DataTypes.STRING,
    department: DataTypes.STRING,
    company: DataTypes.STRING,
    level: DataTypes.STRING,
    status: DataTypes.STRING,
    startDate: DataTypes.DATE,
    phone: DataTypes.STRING,
    lineId: DataTypes.STRING,
    phone: DataTypes.STRING,
    endDate: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    tableName: 'employees',
    modelName: 'Employee',
  });

  return Employee;
};