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
      no: {
        allowNull: false,
        type: Sequelize.STRING
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
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Application');
  }
};
