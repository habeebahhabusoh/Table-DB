
'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Thai_amphures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Thai_amphures.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: DataTypes.INTEGER
    },
    province_id: {
        type: DataTypes.INTEGER,
       references :{
         model: 'Thai_provinces',
         id: 'id',
       },
      },
    name_th: DataTypes.STRING,
    name_en: DataTypes.STRING,
  
  }, {
    sequelize,
    paranoid:true,
    tableName: 'Thai_amphures',
    modelName: 'Thai_amphures',
  });

  return Thai_amphures;
};