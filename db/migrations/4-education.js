'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Education', {
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
      nameOfInstituteEducation: {
        allowNull: false,
        type: Sequelize.STRING
      },
      courseTakenCompleted: {
        allowNull: false,
        type: Sequelize.STRING
      },
      educationFrom: {
        allowNull: true,
        type: Sequelize.DATE
      },
      educationTo: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Education');
  }
};
