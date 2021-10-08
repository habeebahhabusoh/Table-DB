
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert
      ('Application',
        [
          {
            applicationID: "55ac7ad0-5eab-4e70-af50-aecc1fd04c90",
            generalID : "55ac7ad0-5eab-4e70-af50-aecc1fd04c88",
            no: "00001",
            position1: "1115",
            position2 : "1515154851312",
            expectedSalary: "12000",
            availableDate: new Date(),
            createdAt:new Date(),
            updatedAt:new Date(),
           
          }
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Application', null);
  }
};