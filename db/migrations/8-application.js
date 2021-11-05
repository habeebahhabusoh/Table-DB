'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Application', {
      applicationID: {
      primaryKey: true,
       allowNull: false,
       type: Sequelize.UUID,
      },
      generalID: {
        allowNull: false,
        type: Sequelize.UUID,    
        references: {
         model: 'General',
         key: 'generalID',
       },
      },
      numberOrder: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
       },
      position1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      position2: {
        allowNull: false,
        type: Sequelize.STRING
      },
      expectedSalary: {
        allowNull: false,
        type: Sequelize.STRING
      },
      availableDate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING   
      },
      createdAt:{
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt:{
        allowNull: false,
        type: Sequelize.DATE,
      },


    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Application');
  }
};
