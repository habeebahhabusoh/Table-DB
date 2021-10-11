'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ContractAddress', {
      contractID: {
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
      detailTH: {
        allowNull: false,
        type: Sequelize.STRING
      },
      subAreaTH: {
        allowNull: false,
        type: Sequelize.STRING
      },
      areaTH: {
        allowNull: false,
        type: Sequelize.STRING
      },
      provinceTH: {
        allowNull: true,
        type: Sequelize.STRING
      },
      postalCodeTH: {
        allowNull: false,
        type: Sequelize.STRING
      },
      detailEN: {
        allowNull: false,
        type: Sequelize.STRING
      },
      subAreaEN: {
        allowNull: false,
        type: Sequelize.STRING
      },
      areaEN: {
        allowNull: false,
        type: Sequelize.STRING
      },
      provinceEN: {
        allowNull: false,
        type: Sequelize.STRING
      },
      postalCodeEN: {
        allowNull: false,
        type: Sequelize.STRING
      },
      presentAddress: {
        allowNull: false,
        type: Sequelize.STRING
      },
      presentAddressSubArea: {
        allowNull: false,
        type: Sequelize.STRING
      },
      presentAddressArea: {
        allowNull: false,
        type: Sequelize.STRING
      },
      presentAddressProvince: {
        allowNull: false,
        type: Sequelize.STRING
      },
      presentAddressPostalCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      contactEmail: {
        allowNull: false,
        type: Sequelize.STRING
      },
      contactPhone: {
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
    await queryInterface.dropTable('ContractAddress');
  }
};
