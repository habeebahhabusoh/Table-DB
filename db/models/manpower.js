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
    manID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUID
    },
    manCompany: DataTypes.STRING,
    manDepartment: DataTypes.STRING,
    manSection: DataTypes.STRING,
    manPosition: DataTypes.STRING,
    manLevel: DataTypes.STRING,
    manRequestDate: new Date(),
    manStartDate: new Date(),
    manNo: DataTypes.STRING,
    manStaffType: DataTypes.STRING,
    manHiringPeriod: DataTypes.INTEGER,
    manSex: DataTypes.STRING,
    manAge:  DataTypes.INTEGER,
    manEducation: DataTypes.STRING,
    manMajor:DataTypes.STRING,
    manExperience:DataTypes.STRING,
    manInfield:DataTypes.STRING,
    manTestScoreEN:DataTypes.STRING,
    manSkil:DataTypes.STRING,
    manBy:DataTypes.STRING,
    manCommentHead: DataTypes.STRING,
    manSignatureHead:DataTypes.STRING,
    manCommentDateHead:new Date(),
    manCommentHR:DataTypes.STRING,
    manSignatureHR:DataTypes.STRING,
    manCommentDateHR:new Date(),
    manSignatureByHR:DataTypes.STRING,
    manCommentByHR:DataTypes.STRING,
    manStatus:DataTypes.STRING,
    manRemark:DataTypes.STRING,
  }, {
    sequelize,
    tableName: 'ManPower',
    modelName: 'ManPower',
  });

  return ManPower;
};