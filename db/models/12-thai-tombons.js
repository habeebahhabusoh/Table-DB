
'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Thai_tombons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Thai_tombons.init({
    id:DataTypes.INTEGER,
    
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: DataTypes.INTEGER
    },
    
    amphur_id: {
        type: DataTypes.INTEGER,
        references :{
          model: 'Thai_amphures',
          id: 'id',
        },
      },
    name_th: DataTypes.STRING,
    name_en: DataTypes.STRING,
  
  }, {
    sequelize,
    paranoid:true,
    tableName: 'Thai_tombons',
    modelName: 'Thai_tombons',
  });

  return Thai_tombons;
  };