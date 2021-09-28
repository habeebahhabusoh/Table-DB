'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('authorization_codes', {
      code: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.TEXT
      },
      clientId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.TEXT
      },
      redirectUri: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      userId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    await queryInterface.dropTable('authorization_codes');
  }
};
