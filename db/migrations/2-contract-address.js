'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ContractAddress', {
        id: {
         //   primaryKey: true,
            allowNull: false,
            type: Sequelize.UUID,
            references: {
              model: 'General',
              key: 'generalID',
            },
      },
      addressTH: {
        allowNull: false,
        type: Sequelize.STRING
      },
      addressSubAreaTH: {
        allowNull: false,
        type: Sequelize.STRING
      },
      addressAreaTH: {
        allowNull: false,
        type: Sequelize.STRING
      },
      addressProvinceTH: {
        allowNull: true,
        type: Sequelize.STRING
      },
      addressPostalCodeTH: {
        allowNull: false,
        type: Sequelize.STRING
      },
      addressEN: {
        allowNull: false,
        type: Sequelize.STRING
      },
      addressSubAreaEN: {
        allowNull: false,
        type: Sequelize.STRING
      },
      addressAreaEN: {
        allowNull: false,
        type: Sequelize.STRING
      },
      addressProvinceEN: {
        allowNull: false,
        type: Sequelize.STRING
      },
      addressPostalCodeEN: {
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
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ContractAddress');
  }
};
