'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Requisition', {
      requisitionID: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
      },
      applicationID: {
        allowNull: false,
        type: Sequelize.UUID,    
        references: {
         model: 'Application',
         key: 'applicationID',
       },
    },
    manPowerID: {
        allowNull: false,
        type: Sequelize.UUID,    
        references: {
         model: 'ManPower',
         key: 'manPowerID',
       },
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
    await queryInterface.dropTable('Requisition');
  }
};
