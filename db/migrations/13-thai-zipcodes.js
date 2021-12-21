'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Thai_zipcodes', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      zipcode:{
        allowNull: true,
        type: Sequelize.INTEGER
      },
      district_code: {
        allowNull: false,
        type: Sequelize.INTEGER,    
        references: {
         model: 'Thai_tombons',
         key: 'code',
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
      deletedAt:{
        allowNull: true,
        type: Sequelize.DATE,
      },

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Thai_zipcodes');
  }
};
