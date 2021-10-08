'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert
      ('Skill',
        [
          {
            skillID: "45ac7ad0-5eab-4e70-af50-aecc1fd04c88",
            id: "55ac7ad0-5eab-4e70-af50-aecc1fd04c88",
            typeOfSkill : "veryGood",
            level: "1",
            createdAt:new Date(),
            updatedAt:new Date(),
            
          }
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Skill', null);
  }
};