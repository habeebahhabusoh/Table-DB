
'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Thai_zipcodes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Thai_zipcodes.init({
      
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: DataTypes.INTEGER
    },
    
    zipcode: DataTypes.INTEGER,
    
    district_code: {
      type: DataTypes.INTEGER,    
      references: {
       model: 'Thai_tombons',
       key: 'code',
     },
  },
  

  
  }, {
    sequelize,
    paranoid:true,
    tableName: 'Thai_zipcodes',
    modelName: 'Thai_zipcodes',
  });

  return Thai_zipcodes;
  };