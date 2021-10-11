'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Skill extends Model {
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
    skillID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUID
    },
    generalID: {
      type: DataTypes.UUID,
     // primaryKey: true,
      defaultValue: DataTypes.UUID
    },
    typeOfSkill: DataTypes.STRING,
    level: DataTypes.STRING,
  }, {
    sequelize,
    tableName: 'Skill',
    modelName: 'Skill',
  });

  return Skill;
};