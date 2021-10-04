'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('General', {
      generalID: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
      },
      perfixTH: {
        allowNull: false,
        type: Sequelize.STRING
      },
      firstNameTH: {
        allowNull: false,
        type: Sequelize.STRING
      },
      middleNameTH: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastNameTH: {
        allowNull: false,
        type: Sequelize.STRING
      },
      perfixEN: {
        allowNull: false,
        type: Sequelize.STRING
      },
      firstNameEN: {
        allowNull: false,
        type: Sequelize.STRING
      },
      middleNameEN: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastNameEN: {
        allowNull: false,
        type: Sequelize.STRING
      },
      birthDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      age: {
        allowNull: false,
        type: Sequelize.STRING
      },
      maritalStatus: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sex: {
        allowNull: false,
        type: Sequelize.STRING
      },
      height: {
        allowNull: false,
        type: Sequelize.STRING
      },
      weight: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nationality: {
        allowNull: false,
        type: Sequelize.STRING
      },
      idCardNo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      expiryDate: {
        allowNull: false,
        type: Sequelize.DATE
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
        allowNull: false,
        type: Sequelize.DATE
      },
      militaryService: {
        allowNull: false,
        type: Sequelize.STRING
      },
      militaryData: {
        allowNull: false,
        type: Sequelize.STRING
      },
      crimeStatus: {
        allowNull: false,
        type: Sequelize.STRING
      },
      crimeData: {
        allowNull: false,
        type: Sequelize.STRING
      },
      disease: {
        allowNull: false,
        type: Sequelize.STRING
      },
      diseaseData: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('General');
  }
};
