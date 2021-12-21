'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Thai_amphures', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      province_id: {
        allowNull: true,
        type: Sequelize.INTEGER,    
        references: {
         model: 'Thai_provinces',
         key: 'id',
       },
    },
      name_th: {
        allowNull: false,
        type: Sequelize.STRING
      },
      name_en: {
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
      deletedAt:{
        allowNull: true,
        type: Sequelize.DATE,
      },

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Thai_amphures');
  }
};
