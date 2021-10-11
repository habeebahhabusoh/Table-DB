'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Driving', {
      drivingID: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
      },
      generalID: {
            primaryKey: true,
            allowNull: false,
            type: Sequelize.UUID,
            references: {
              model: 'General',
              key: 'generalID',
            },
      },
      drivingLicenseType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      drivingType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      drivingLicenseNo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      drivingExpiryDate: {
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
    await queryInterface.dropTable('Driving');
  }
};
