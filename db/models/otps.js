'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class OTP extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OTP.init({
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    userId: DataTypes.UUIDV4,
    password: DataTypes.TEXT,
    reference: DataTypes.STRING,
    type: DataTypes.STRING,
    verify: DataTypes.BOOLEAN,
    expiredAt: DataTypes.DATE,
  }, {
    sequelize,
    tableName: 'otps',
    modelName: 'OTP',
  });

  return OTP;
};