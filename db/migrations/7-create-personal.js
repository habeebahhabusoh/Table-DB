'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('personal', {
      citizenId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      titleTH: {
        allowNull: false,
        type: Sequelize.STRING
      },
      titleEN: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nameTH: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nameEN: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastnameTH: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastnameEN: {
        allowNull: false,
        type: Sequelize.STRING
      },
      birthday: {
        allowNull: false,
        type: Sequelize.DATE
      },
      gender: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('personal');
  }
};
