'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ManPower', {
      manpowerID: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
      },
      company: {
        allowNull: false,
        type: Sequelize.STRING
      },
      department: {
        allowNull: false,
        type: Sequelize.STRING
      },
      section: {
        allowNull: false,
        type: Sequelize.STRING
      },
      position: {
        allowNull: true,
        type: Sequelize.STRING
      },
      level: {
        allowNull: false,
        type: Sequelize.STRING
      },
      requestDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      startDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      no: {
        allowNull: false,
        type: Sequelize.STRING
      },
      staffType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      hiringPeriod: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      sex: {
        allowNull: false,
        type: Sequelize.STRING
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      education: {
        allowNull: false,
        type: Sequelize.STRING
      },
      major: {
        allowNull: false,
        type: Sequelize.STRING
      },
      experience: {
        allowNull: false,
        type: Sequelize.STRING
      },
      infield: {
        allowNull: false,
        type: Sequelize.STRING
      },
      testScoreEN: {
        allowNull: false,
        type: Sequelize.STRING   
    },
    skill: {
      allowNull: false,
      type: Sequelize.STRING
    },
    by: {
      allowNull: false,
      type: Sequelize.STRING   
    },
    commentHead: {
        allowNull: false,
        type: Sequelize.STRING
      },
    signatureHead: {
        allowNull: false,
        type: Sequelize.STRING   
      },
    commentDateHead: {
        allowNull: false,
        type: Sequelize.DATE
      },
    commentHR: {
        allowNull: false,
        type: Sequelize.STRING   
      },
    signatureHR: {
        allowNull: false,
        type: Sequelize.STRING   
      },
    commentDateHR: {
        allowNull: false,
        type: Sequelize.DATE   
      },
    signatureByHR: {
        allowNull: false,
        type: Sequelize.STRING   
      },
    commentByHR: {
        allowNull: false,
        type: Sequelize.STRING   
      },
    status: {
        allowNull: false,
        type: Sequelize.STRING   
      },
    remark: {
        allowNull: false,
        type: Sequelize.STRING   
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ManPower');
  }
};
