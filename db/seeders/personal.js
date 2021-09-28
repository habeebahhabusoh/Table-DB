'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert
      ('personal',
        [
          {
            citizenId: "8888888888888",
            titleTH : "คุณ",
            titleEN: "Mr.",
            nameTH: "อิมแพ็ค",
            nameEN: "IMPACT",
            lastnameTH: "ทดสอบ",
            lastnameEN: "Test",
            birthday: "2000-01-01T00:00:00.069Z",
            gender: "M",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            citizenId: "4444444444444",
            titleTH : "คุณ",
            titleEN: "Ms.",
            nameTH: "อิมแพ็ค",
            nameEN: "IMPACT",
            lastnameTH: "ทดสอบ",
            lastnameEN: "Test",
            birthday: "2000-01-01T00:00:00.069Z",
            gender: "F",
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('personal', null);
  }
};