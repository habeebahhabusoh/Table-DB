'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ManPower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ManPower.init({
    manPowerID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUID
    },
    company: DataTypes.STRING,
    department: DataTypes.STRING,
    section: DataTypes.STRING,
    positionRequired: DataTypes.STRING,
    level: DataTypes.STRING,
    requestDate: DataTypes.DATE,
    commencementDate: DataTypes.DATE,
    no: DataTypes.STRING,
    employeeType: DataTypes.STRING,
    hiringPeriod: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    age:  DataTypes.INTEGER,
    education: DataTypes.STRING,
    major:DataTypes.STRING,
    experience:DataTypes.STRING,
    inField:DataTypes.STRING,
    englishTestScore:DataTypes.STRING,
    skillAndKnowledge:DataTypes.ARRAY(DataTypes.STRING),
    requestedBy:DataTypes.STRING,
    positionRequisition: DataTypes.STRING,
    dateRequisition:DataTypes.DATE,
    commentByDepartmentHead:DataTypes.STRING,
    signatureByDepartmentHead:DataTypes.STRING,
    dateByDepartmentHead:DataTypes.DATE,
    commentByHRBP:DataTypes.STRING,
    signatureHRBP:DataTypes.STRING,
    dateHRBP:DataTypes.DATE,
    signatureByDirectorHR:DataTypes.STRING,
    dateByDirectorHR:DataTypes.DATE,
    status:DataTypes.STRING,
    remark:DataTypes.STRING,
  }, {
    sequelize,
    tableName: 'ManPower',
    modelName: 'ManPower',
  });

  return ManPower;
};