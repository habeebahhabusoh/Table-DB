'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Skill', {
      skillID: {
        primaryKey: true,
       allowNull: false,
       type: Sequelize.UUID,
      },
      id: {
        //   primaryKey: true,
           allowNull: false,
           type: Sequelize.UUID,
           references: {
             model: 'General',
             key: 'generalID',
           },
      },
      typeOfSkill: {
        allowNull: false,
        type: Sequelize.STRING
      },
      level: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Skill');
  }
};
