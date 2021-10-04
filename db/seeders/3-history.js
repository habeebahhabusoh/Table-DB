'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert
      ('History',
        [
          {
            id: "55ac7ad0-5eab-4e70-af50-aecc1fd04c88",
            companyNameHistory : "cdg ",
            positionHistory: "่ช่างไฟ",
            salaryHistory: "12000",
            startDate: new Date(),
            endDate: new Date(),
            
          }
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('History', null);
  }
};