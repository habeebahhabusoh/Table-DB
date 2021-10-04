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
    mampowerID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUID
    },
    company: DataTypes.STRING,
    department: DataTypes.STRING,
    section: DataTypes.STRING,
    position: DataTypes.STRING,
    level: DataTypes.STRING,
    requestDate: new Date(),
    startDate: new Date(),
    no: DataTypes.STRING,
    staffType: DataTypes.STRING,
    hiringPeriod: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    age:  DataTypes.INTEGER,
    education: DataTypes.STRING,
    major:DataTypes.STRING,
    experience:DataTypes.STRING,
    infield:DataTypes.STRING,
    testScoreEN:DataTypes.STRING,
    skil:DataTypes.STRING,
    by:DataTypes.STRING,
    commentHead: DataTypes.STRING,
    signatureHead:DataTypes.STRING,
    commentDateHead:new Date(),
    commentHR:DataTypes.STRING,
    signatureHR:DataTypes.STRING,
    commentDateHR:new Date(),
    signatureByHR:DataTypes.STRING,
    commentByHR:DataTypes.STRING,
    status:DataTypes.STRING,
    remark:DataTypes.STRING,
  }, {
    sequelize,
    tableName: 'ManPower',
    modelName: 'ManPower',
  });

  return ManPower;
};