'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Education', {
      educationID: {
        primaryKey: true,
       allowNull: false,
       type: Sequelize.UUID,
      },
      id: {
        //   primaryKey: true,
           allowNull: false,
           type: Sequelize.UUID,
           references: {
             model: 'General',
             key: 'generalID',
           },
      },
      educationLevel: {
        allowNull: false,
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      major: {
        allowNull: false,
        type: Sequelize.STRING
      },
      startDate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      endDate: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Education');
  }
};
