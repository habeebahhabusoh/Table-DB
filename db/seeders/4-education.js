'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert
      ('Education',
        [
          {
            educationID: "56ac7ad0-5eab-4e70-af50-aecc1fd04c88",
            id: "55ac7ad0-5eab-4e70-af50-aecc1fd04c88",
            educationLevel : "มัธยมศึกษา ",
            name: "อรุณศาน์วิทยามูลนิธิ",
            major: "ศาสนาและสามัญ",
            startDate: new Date(),
            endDate: new Date(),
            
          }
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Education', null);
  }
};