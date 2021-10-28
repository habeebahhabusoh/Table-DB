'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('History', {
      historyID: {
        primaryKey: true,
       allowNull: false,
       type: Sequelize.UUID,
      },
      generalID: {
         //   primaryKey: true,
            allowNull: false,
            type: Sequelize.UUID,
            references: {
              model: 'General',
              key: 'generalID',
            },
      },
      companyNameHistory: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      positionHistory: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      salaryHistory: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      startDate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      endDate: {
        allowNull: true,
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
    await queryInterface.dropTable('History');
  }
};
