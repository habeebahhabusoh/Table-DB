
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert
      ('Driving',
        [
          {
            drivingID: "45ac7ad0-5eab-4e70-af50-aecc1fd04c88",
            id: "55ac7ad0-5eab-4e70-af50-aecc1fd04c88",
            drivingLicenseType : "test",
            drivingType: "y",
            drivingLicenseNo: "1115",
            drivingExpiryDate: new Date(),
           
          }
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Driving', null);
  }
};