
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert
      ('Application',
        [
          {
            id: "55ac7ad0-5eab-4e70-af50-aecc1fd04c88",
            idCardNo : "",
            no: "00001",
            position1: "1115",
            position2 : "1515154851312",
            expectedSalary: "12000",
            availableDate: new Date(),
           
          }
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Application', null);
  }
};