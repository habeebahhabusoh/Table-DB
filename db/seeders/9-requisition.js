
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert
      ('Requisition',
        [
          {
            requisitionID: "55ac7ad0-5eab-4e70-af50-aecc1fd04c99",
            manPowerID : "55ac7ad0-5eab-4e70-af50-aecc1fd04c89",
            applicationID: "55ac7ad0-5eab-4e70-af50-aecc1fd04c90",
            createdAt:new Date(),
            updatedAt:new Date(),
           
          }
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Requisition', null);
  }
};