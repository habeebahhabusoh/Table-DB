'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clients', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      logoUri: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      clientId: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      clientSecret: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      redirectUris: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.TEXT),
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
    await queryInterface.dropTable('clients');
  }
};
