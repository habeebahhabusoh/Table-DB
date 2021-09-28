'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert
      ('clients',
        [
          {
            id: "55ac7ad0-5eab-4e70-af50-aecc1fd04c88",
            name: "Kepler Platform",
            logoUri: "/",
            clientId: "test",
            clientSecret: "test",
            redirectUris: "{https://oauth.pstmn.io/v1/callback,impact://callback,http://localhost:8080/callback,https://kepler-office-dev.hrim.one/callback,https://kepler-sso-dev.hrim.one/callback}",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: "f6717f30-d483-4181-9ed1-5c874843c244",
            name: "Line",
            logoUri: "/",
            clientId: "line",
            clientSecret: "password@1",
            redirectUris: "{https://sites.google.com/hrim.club/pdboard,https://awesomemotive.com,https://napassornk.wixsite.com/website}",
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null);
  }
};