'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert
      ('Skill',
        [
          {
            id: "55ac7ad0-5eab-4e70-af50-aecc1fd04c88",
            typeOfSkill : "veryGood",
            level: "1",
            
          }
        ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Skill', null);
  }
};