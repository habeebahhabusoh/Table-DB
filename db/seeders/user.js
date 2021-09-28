'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert
      ('users',
        [
          {
            id: "00000",
            username : "test",
            password: "0803bab0757bbf74eb05d13d0b12889ed460b0dbd60f81b6086db3c3a802772a2698ad1a9770aceb91a86a0bf5e0139d7b2dab5a3ba41501a6273af4b6ee3f7f",
            displayName: "zen zen",
            verifyType: "SMS",
            verify: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null
          }
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null);
  }
};